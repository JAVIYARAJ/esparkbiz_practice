const e = require('express');
const express=require('express');
const con=require('./db/dbconnect');
const bodyParser = require("body-parser")

const app=express();

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine','ejs');

app.get('/form',(req,res)=>{
    if(res.statusCode==200){
        res.render('../views/form.ejs');
    }
});

//create post request for insert data into daatabase
app.post('/insert',(req,res)=>{
    
    if(res.statusCode==200){
        const {
            name,city,teacher_id,marks
        }=req.body
        con.query(`insert into student (name,city,teacher_id,marks) values('${name}','${city}',${teacher_id},${marks})`,(err,result)=>{
            if(err){
                console.log(err.message);
            }
            else{
                res.send("Data added successfully!");
            }
        });
       
    }
});

app.get('/getdata',(req,res)=>{
    if(res.statusCode==200){
        let result;
        con.query("SELECT * FROM student",(err,value,field)=>{
            res.render("result",{data:value});
        });
    }
});

app.get('/update-student/:id',(req,res)=>{
    let id=req.params.id;
    if(res.statusCode==200){
        con.query(`SELECT * FROM student where id=${id}`,(err,result,field)=>{
            console.log(result);
            res.render("update",{data:result,id:id});
        });
    }
});

app.post('/update-student-data/:id',(req,res)=>{
    
    if(res.statusCode==200){
        const{
            id,name_update,city_update,teacher_id_update,marks_update
        }=req.body
        
        con.query(`UPDATE student set name='${name_update}',city='${city_update}',teacher_id=${teacher_id_update},marks=${marks_update} where id=${id}'`,(req,res)=>{
            if(res.statusCode==200){
                console.log(`${id} id data updated`);
                res.render("Data updated");
            }
        });
    }
});

app.listen(3000,()=>{
    console.log('server is running');
})