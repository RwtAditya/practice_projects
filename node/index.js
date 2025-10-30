const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const server = http.createServer((req, res) => {
    let filePath = req.url;

    if(filePath === '/'){
        filePath = '/index.html';
    }

    fs.readFile(path.join(__dirname, filePath), (err, data) => {
        if(err){
            fs.readFile(path.join(__dirname, '/404.html'), (err, data) => {
                res.writeHead(404, {'content-type' : 'text/html'});
                res.end(data);
            });
        }else{
            res.writeHead(200, {'content-type' : 'text/html'});
            res.end(data);
        }
    });

});

server.listen(8000, () => {
    console.log('Server is running!');
});