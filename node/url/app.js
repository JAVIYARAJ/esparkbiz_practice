const url=require('url');

const reslut=url.parse('https://raj:rjcoding@123@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(reslut);


//sequence of standard url
//protocol->user->password->hostname->port->path->query->hash