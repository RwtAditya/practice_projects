const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get('/', (req,res) => {

    fs.readFile(path.join(__dirname, '/index.html'),  (err, data) => {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.end(data);
    })
});

app.get('/about.html', (req,res) => {

    fs.readFile(path.join(__dirname, '/about.html'),  (err, data) => {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.end(data);
    })
});

app.get('/contact-me.html', (req,res) => {

    fs.readFile(path.join(__dirname, '/contact-me.html'),  (err, data) => {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.end(data);
    })
});

app.get('/index.html', (req,res) => {
    fs.readFile(path.join(__dirname, '/index.html'), (err, data) => {
        res.writeHead(200, {'content-type' : 'text/html'});
        res.end(data);
    });
});

app.get('/courses.html', (req,res)=> {
    fs.readFile(path.join(__dirname, '/courses.html'), (err, data) => {
        if(err){
            fs.readFile(path.join(__dirname, '/404.html'), (err,data) => {
                res.writeHead(201, {'content-type' : 'text/html'});
                res.end(data);
            })
        }else{
            res.writeHead(201, {'content-type' : 'text/html'});
            res.end(data);
        }
    })
})

const PORT = 3000;

app.listen(PORT, (err) => {
    if(err){
        throw err;
    }
    else console.log("Server is running!");
});