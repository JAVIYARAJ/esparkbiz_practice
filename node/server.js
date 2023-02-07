const http = require("http");
const hostname = '127.0.0.1';
const cm=require('./module/module.js');
const port = 3000;

const server = http.createServer((req, res) => {
    //first way to set status code and content type
    // res.statusCode = 200;
    // res.setHeader('Content-type', 'text/plain');

    //second way to set status code and content type
    res.writeHead(200,{'Content-type':'text/plain'});
    res.write("Hello world\n");
    res.end("Completed");
});

server.listen(port, hostname, (err) => {
    console.log(`server is start and running at http://${hostname}:${port}`);
});
