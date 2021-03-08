const fs = require('fs').promises;

fs.readFile('C:\\Users\\gktjs\\Desktop\\공부\\node.js\\Chapter3/readme.txt')
.then((data) => {
    console.log(data);
    console.log(data.toString());
})
.catch((err) => {
    console.log(err);
})