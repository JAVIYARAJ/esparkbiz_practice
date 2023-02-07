const fs = require("fs");
const event=require("events");

// let content='Esparkbiz';

/*
fs.appendFile('./fs/sample.txt',content,(err)=>{
    if(err){
        console.log(err.message);
    }
});
*/


/*
fs.readFile('./fs/sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err.message);
    }
    console.log(data);
});
*/

/* if want crreate a file then we need w or a mode
fs.open('./fs/custom.txt','a+',(err,flag)=>{
    if(err){
        console.log(err.message);
    }
});
*/

/*
fs.writeFile('./fs/custom.txt','new file',(err)=>{
    if(err){
         console.log(err.message);
    }
    console.log("write content successfully");
});
*/

/*
fs.unlink('./fs/custom.txt',(err)=>{
    if(err){
        console.log(err.message);
    }
    console.log("File Remove Successfully");
});
*/

/*+
fs.rename('./fs/index.html','./fs/main.html',(err)=>{
    if(err){
        console.log(err.message);
    }
    console.log("File is Renamed");
});
*/

/*
let rs=fs.createReadStream('./fs/sample.txt');
//so this event fire based on situation
rs.on('open',(err)=>{
    if(err){
        console.log(err.message);
    }
    console.log("File is open now");
    rs.close();
});

rs.on('close',()=>{
    console.log("File is closed now");
});
*/

//create own event

/*
let em=new event.EventEmitter();

let customFun=function(){
    console.log('custom function is called');
}

em.on("myEvent",customFun);

em.emit('myEvent');
*/