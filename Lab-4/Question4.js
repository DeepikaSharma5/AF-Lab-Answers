const fs = require('fs');
const fileName = __dirname +'/test.txt';
const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName); //read the file
const writeStream = fs.createWriteStream(outFileName); //write the file

readStream.on('end',() => {
    console.log('End of reading file.');
});

writeStream.addListener('close',()=>{
    console.log('End of writing file.');
    console.log(fs.readFileSync('test-copy.txt','utf-8'));
});

readStream.pipe(writeStream);