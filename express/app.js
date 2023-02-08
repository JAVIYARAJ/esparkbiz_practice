const express=require('express');
const con=require('./db/dbconnect');
const bodyParser = require("body-parser")

const app=express();

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine','ejs');

//get request for display form 
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

//use for get all data and display on web
app.get('/getdata',(req,res)=>{
    if(res.statusCode==200){
        con.query("SELECT * FROM student",(err,value,field)=>{
            res.render("result",{data:value});
        });
    }
});

//this get request use for select one record and then display on update form
app.get('/update-student/:id',(req,res)=>{
    let id=req.params.id;
    if(res.statusCode==200){
        con.query(`SELECT * FROM student where id=${id}`,(err,result,field)=>{
            console.log(result);
            res.render("update",{data:result});
        });
    }else{
        res.send("Update error occur");
    }
});

//this post request for update record
app.post('/update-student-data/:id',(req,res)=>{
    console.log(res);
    if(res.statusCode==200){
        const{
            name_update,city_update,teacher_id_update,marks_update
        }=req.body
        
        con.query(`UPDATE student set name='${name_update}',city='${city_update}',teacher_id=${teacher_id_update},marks=${marks_update} where id=${req.params.id}`,(err, ans)=>{
           if(err) return console.log(err.message);
           return res.send("Data Updated");
        });
    }
});

//this get request for delete a one record.
app.get('/delete-data/:id',(req,res)=>{
    
        console.log(req.params.id);
        con.query(`delete from student where id=${req.params.id}`,(err,result)=>{
            if(err){
                return console.log(err.message);
            }else{
                return res.send("Data Deleted Successfully");
            }
        });
    
});

app.listen(3000,()=>{
    console.log('server is running');
})