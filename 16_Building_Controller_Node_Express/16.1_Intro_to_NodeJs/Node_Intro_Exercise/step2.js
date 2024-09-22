import fs from 'fs';
import process from 'process';
import axios from 'axios';

const cat = path => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}. ${err}`);
            process.exit(1);
        } else {
            console.log(data);
        }
    })
}

const webCat = async (URL) => {
    try {
        const res = await axios.get(URL);
        console.log(res.data);
    } catch (err) {
        console.log(`Fetching data from ${URL} failed. ${err}`);
        process.exit(1);
    }
}

const path = process.argv[2];

if (path.slice(0, 4) === 'http')
    webCat(path);
else
    cat(path);