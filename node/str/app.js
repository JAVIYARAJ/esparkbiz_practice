const fs=require('fs');
const { get } = require('http');

//task- read file and convert first letter of word in uppercase
/*
fs.readFile('./str/sample.txt','utf-8',(err,data)=>{
    let content=data.split(" ");
    content.forEach((data)=>{
        let fl=data.charAt(0).toUpperCase();
        let word=fl+data.substring(1,data.length);
        console.log(word);
    });
})
*/
