const fs = require('fs').promises;

console.log('시작');
fs.readFile('C:\\Users\\gktjs\\Desktop\\공부\\node.js\\Chapter3/readme2.txt')
.then((data) => {
    console.log('1번',data.toString());
    return fs.readFile('C:\\Users\\gktjs\\Desktop\\공부\\node.js\\Chapter3/readme2.txt');
})
.then((data) => {
    console.log('2번',data.toString());
    return fs.readFile('C:\\Users\\gktjs\\Desktop\\공부\\node.js\\Chapter3/readme2.txt');
})
.then((data) => {
    console.log('3번',data.toString());
    console.log('끝');
})
.catch((err) => {
    console.error();(err);
})
