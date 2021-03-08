const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('C:\\Users\\gktjs\\Desktop\\공부\\node.js\\Chapter3/readme4.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme4.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);