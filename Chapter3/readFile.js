const fs = require('fs');

fs.readFile('C:\\Users\\gktjs\\Desktop\\공부\\node.js\\Chapter3\\readme.txt',(err, data) => {
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});