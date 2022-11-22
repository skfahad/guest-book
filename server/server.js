const express = require('express');
const router = require("express"); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const cors = require('cors');
var fs = require('fs');
const {parseISO, fromUnixTime, getUnixTime, startOfDay, endOfDay} = require("date-fns");

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

app.get('/api/show', function (req, res) {

    let guests = null;
    fs.readFile('data/guests.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            guests = JSON.parse(data); //now it an object
            guests = guests.data;

            console.log(req.query);

            if (req.query.filterByDate === 'true') {
                if (req.query.checkInDate) {
                    let start = getUnixTime(startOfDay(fromUnixTime(req.query.checkInDate)));
                    let end = getUnixTime(endOfDay(fromUnixTime(req.query.checkInDate)));
                    guests = guests.filter(guest => guest.checkInDate >= start  && guest.checkInDate <= end);
                }
                if (req.query.checkOutDate) {
                    let start = getUnixTime(startOfDay(fromUnixTime(req.query.checkOutDate)));
                    let end = getUnixTime(endOfDay(fromUnixTime(req.query.checkOutDate)));
                    guests = guests.filter(guest => guest.checkOutDate >= start  && guest.checkOutDate <= end);
                }
            }

            if (req.query.category) {
                guests = guests.filter(guest => guest.category === req.query.category);
            }
            res.send({guests: guests});
        }});
})

app.post('/api/store', function (req, res) {

    fs.readFile('data/guests.json', 'utf8', function readFileCallback(err, data){
        if (err){
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
        }});
    res.send({message: 'Booking added'})
})
// create a GET route