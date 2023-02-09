const express = require('express');
const ejs = require('ejs');
const bp = require('body-parser');
const conn = require("./db/dbconnect.js");
const con = require('./db/dbconnect.js');
const app = express();

app.set('view engine', 'ejs');



//this get request use for paagination
app.get('/pages', (req, res) => {
    
    let records=[[],[],[],[],[],[],[],[],[],[]];
    let ids = ["id", "First_Name", "Last_Name", "Contact_No", "City", "Email", "University_id", "createdAt"];
    conn.query(`select * from student_express limit 0,10`, (err, page1, filed) => {
        records[0].push(...page1);
    });
    conn.query(`select * from student_express limit 10,10`, (err, page2, filed) => {
        records[1].push(...page2);
    });
    conn.query(`select * from student_express limit 20,10`, (err, page3, filed) => {
        records[2].push(...page3);
    });
    conn.query(`select * from student_express limit 30,10`, (err, page4, filed) => {
        records[3].push(...page4);
    });
    conn.query(`select * from student_express limit 40,10`, (err, page5, filed) => {
        records[4].push(...page5);
    });
    conn.query(`select * from student_express limit 50,10`, (err, page6, filed) => {
        records[5].push(...page6);
    });
    conn.query(`select * from student_express limit 60,10`, (err, page7, filed) => {
        records[6].push(...page7);
    });
    conn.query(`select * from student_express limit 70,10`, (err, page8, filed) => {
        records[7].push(...page8);
    });
    conn.query(`select * from student_express limit 80,10`, (err, page9, filed) => {
        records[8].push(...page9);
    });
    conn.query(`select * from student_express limit 90,10`, (err, page10, filed) => {
        records[9].push(...page10);
        console.log(records);
        res.render('pages',{data:records,col:ids});
    });

});


app.listen(3000, () => {
    console.log('server is running on 3000');
});