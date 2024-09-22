import fs from 'fs';
import process from 'process';

const cat = path => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading ${path}. ${err}`);
            process.exit();
        } else {
            console.log(data);
        }
    })
}

// Stream
// const cat = path => {
//     const readFileStream = fs.createReadStream(path, { encoding: 'utf8' });

//     readFileStream.on('data', chunk => {
//         console.log(chunk);
//     })
// }

// console.log(process.argv);
cat(process.argv[2]);