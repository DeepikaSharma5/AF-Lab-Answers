const fs = require('fs');
const fileName = __dirname + '/test.txt';

fs.readFile(fileName,((err, data) => {
    //err = null; this false
    //err = undefined; this false
    //err = 0; this false
    //err = ''; this false
    //err = false; this false
    if (err){
        console.error(err);
    }
    console.log(data.toString());
}));

//const data = fs.readFileSync(fileName);

// fs.readFile(fileName,"utf8",((err, data) => {
//     if (err){
//         console.error(err);
//     }
//     console.log(data);
// }));


console.log("This is first");

// const data = fs.readFileSync(fileName);
// console.log(data.toString());