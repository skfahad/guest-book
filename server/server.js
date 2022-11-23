const express = require('express');
const router = require("express"); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const cors = require('cors');
var fs = require('fs');
const {fromUnixTime, getUnixTime, startOfDay, endOfDay, format} = require("date-fns");
const xl = require('excel4node');
const pdf = require('html-pdf');
const admzip = require('adm-zip')
const path = require("path");

const corsOption = {
    origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
//if you want in every domain then
app.use(cors())


// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

//app.use('/', express.static(__dirname + '/'));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.post('/api/login', function (req, res) {

    let admins = [];
    fs.readFile('data/admins.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log('req.body: ', req.body);
            let obj = JSON.parse(data); //now it an object
            admins = obj.data;
            let [authAdmin] = admins.filter(admin => admin.email === req.body.email && admin.password === req.body.password);
            console.log('authAdmin: ', authAdmin);
            if (!authAdmin) {
                console.log('got it');
                res.send({success: 0});
            } else {
                res.send({success: 1});
            }
        }
    });
})

app.get('/api/show', function (req, res) {

    let guests = null;
    fs.readFile('data/guests.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            guests = JSON.parse(data); //now it an object
            guests = guests.data;

            if (req.query.filterByDate === 'true') {
                if (req.query.checkInDate) {
                    let start = getUnixTime(startOfDay(fromUnixTime(req.query.checkInDate)));
                    let end = getUnixTime(endOfDay(fromUnixTime(req.query.checkInDate)));
                    guests = guests.filter(guest => guest.checkInDate >= start && guest.checkInDate <= end);
                }
                if (req.query.checkOutDate) {
                    let start = getUnixTime(startOfDay(fromUnixTime(req.query.checkOutDate)));
                    let end = getUnixTime(endOfDay(fromUnixTime(req.query.checkOutDate)));
                    guests = guests.filter(guest => guest.checkOutDate >= start && guest.checkOutDate <= end);
                }
            }

            if (req.query.category) {
                guests = guests.filter(guest => guest.category === req.query.category);
            }
            res.send({guests: guests});
        }
    });
})

app.post('/api/store', function (req, res) {

    fs.readFile('data/guests.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            let obj = JSON.parse(data); //now it an object
            req.body.id = obj.data.at(-1)?.id + 1 ?? 1;
            req.body.createdAt = Math.round(new Date().getTime() / 1000);
            obj.data.push(req.body); //add some data
            let json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('data/guests.json', json, 'utf8', function () {
                //console.log('write it back');
            }); // write it back
        }
    });
    res.send({message: 'Booking added'})
})

app.get('/api/exportToExcel', function (req, res) {

    fs.readFile('data/guests.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            let obj = JSON.parse(data); //now it an object
            let guests = obj.data;

            const wb = new xl.Workbook();
            const ws = wb.addWorksheet('guests');

            const headingColumnNames = ["Name", "Email", "Phone Number", "Adults", "Children", "checkInDate", "checkOutDate", "Category"];

            let headingColumnIndex = 1;
            headingColumnNames.forEach(heading => {
                ws.cell(1, headingColumnIndex++)
                    .string(heading)
            });

            let rowIndex = 2;
            guests.forEach(record => {
                let columnIndex = 1;

                ws.cell(rowIndex, columnIndex++).string(record['name']);
                ws.cell(rowIndex, columnIndex++).string(record['email']);
                ws.cell(rowIndex, columnIndex++).string(`${record['isdCode']}${record['phoneNumber']}`);
                ws.cell(rowIndex, columnIndex++).string(record['adults']);
                ws.cell(rowIndex, columnIndex++).number(record['children']);
                ws.cell(rowIndex, columnIndex++).date(fromUnixTime(record['checkInDate']));
                ws.cell(rowIndex, columnIndex++).date(fromUnixTime(record['checkOutDate']));
                ws.cell(rowIndex, columnIndex++).string(record['category']);

                rowIndex++;
            });

            wb.write(`filename.xlsx`, function () {
                let filePath = path.join(__dirname, `filename.xlsx`);
                res.download(filePath);
            });
        }
    });
    //res.send({message: 'Exported'})
})

app.get('/api/exportToPdf', function (req, res) {

    fs.readFile('data/guests.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            let obj = JSON.parse(data); //now it an object
            let guests = obj.data;

            const headingColumnNames = ["Name", "Email", "Phone Number", "Adults", "Children", "checkInDate", "checkOutDate", "Category"];

            let table = '';

            table += "<table border='1' style='width:100%;word-break:break-word;'>";

            table += "<tr>";
            headingColumnNames.forEach(heading => {
                table += `<th style="white-space: nowrap">${heading}</th>`;
            });
            table += "</tr>";

            guests.forEach(function (row) {
                table += "<tr>";
                table += `<td style="white-space: nowrap">${row.name}</td>`;
                table += `<td style="white-space: nowrap">${row.email}</td>`;
                table += `<td style="white-space: nowrap">${row['isdCode']}${row['phoneNumber']}</td>`;
                table += `<td style="white-space: nowrap">${row.adults}</td>`;
                table += `<td style="white-space: nowrap">${row.children}</td>`;
                table += `<td style="white-space: nowrap">${fromUnixTime(row['checkInDate'])}</td>`;
                table += `<td style="white-space: nowrap">${fromUnixTime(row['checkOutDate'])}</td>`;
                table += `<td style="white-space: nowrap">${row['category']}</td>`;
                table += "</tr>";
            });

            table += "</table>";

            let options = {
                "format": "A4",
                "orientation": "landscape",
                "border": {
                    "top": "0.1in",
                },
                "timeout": "120000"
            };

            pdf.create(table, options).toFile('filename.pdf', function (err, result) {
                let filePath = path.join(__dirname, `filename.pdf`);
                res.download(filePath);
            });

        }
    });
})
