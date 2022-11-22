import {guestActions} from "./slice";
var fs = require('fs');
import guestFile from '../../Data/guests.json';

const basePath = '/guest';

export const store = (formdata) => {
    console.log('formdata: ', formdata);
    fs.readFile(guestFile, 'utf8', (err, jsonString) => {
        if (err) {
            return;
        }
        try {
            console.log('jsonString: ', jsonString);
        } catch (err) {
            console.log('Error parsing JSON string:', err);
        }
    })
}
