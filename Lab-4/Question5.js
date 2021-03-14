const http = require('http');

http.createServer((req ,res) =>{
    res.setHeader('Content-Type', 'text.html');

    switch (req.method){
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data',data =>{
                res.write('<h1> Hello ' + data + '</h1>' );
                res.end();
            });
            break;
        case 'PUT':
            res.on('data',data=>{
                res.write('<h1> Put method success</h1>' +data);
                res.end();
            });
            break;

    }
    // res.write('<h1>Hello World</h1>');
    // res.end();
}).listen(3000,(err) =>{
    if(err){
        console.error(err);
        return;
    }
    console.log('server is listening to port 3000');
});

