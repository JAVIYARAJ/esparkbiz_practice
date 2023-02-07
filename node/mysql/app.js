const mysql = require('mysql2');

let cons = mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "root",
    password: "root",
    database: "practice"
}
);

cons.connect((err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("DB Connected");
    }
    
    cons.query("INSERT INTO practice.student (name,city,teacher_id,marks) values('rjcoding','bhavnagar',5,'90')",(err,data,field)=>{
        if(err){
            console.log(err.message);
        }
        cons.query("SELECT * FROM practice.student", (err, result, field) => {
            if (err) {
                console.log(field);
            }
            console.log(result);
        });
    })

    
})