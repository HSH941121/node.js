const fs = require('fs');

const readStream = fs.createReadStream('C:\\Users\\gktjs\\Desktop\\공부\\node.js\\Chapter3/readme4.txt');
const writeStream = fs.createWriteStream('writeme3.txt');
readStream.pipe(writeStream);