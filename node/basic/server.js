const http = require("http");
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // first way to set status code and content type
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');

    //second way to set status code and content type
    res.end("Completed");
});

server.listen(port, hostname, () => {
    console.log(`server is start and running at http://${hostname}:${port}`);
});
