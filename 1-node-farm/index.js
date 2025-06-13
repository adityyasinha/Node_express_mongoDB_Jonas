const fs = require('fs');  //fs=file system


/*
const hello ='Hello world';
console.log(hello);

const textIn = fs.readFileSync('./txt/input.txt','utf-8')
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;  //'this is :' +textIn
fs.writeFileSync('./txt/output.txt',textOut);
console.log('File written!');
*/

const http = require('http');

// SERVER
const server = http.createServer((req, res) => {
    console.log(req);
    res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});
