const express = require('express');
const ejs = require('ejs');
const bp = require('body-parser');
const conn = require("./db/dbconnect.js");
const app = express();

app.set('view engine', 'ejs');

const first_name = ["Aarav", "Aryan", "Aditi", "Aishwarya", "Amit", "Amrita", "Ananya", "Anika", "Anjali", "Arjun", "Arnav", "Aryan", "Ashok", "Bharat", "Bindiya", "Chaitanya", "Chandni", "Chetan", "Darshan", "Devanshi", "Dhruv", "Diya", "Ganesh", "Garima", "Gaurav", "Gayatri", "Gitanjali", "Hari", "Hema", "Isha", "Ishan", "Jasmine", "Jayant", "Jhanvi", "Jigar", "Karan", "Kavita", "Khushi", "Kiran", "Lakshmi", "Madhuri", "Mahi", "Manav", "Meera", "Megha", "Mohit", "Mukesh", "Naveen", "Neha", "Nidhi", "Pallavi", "Parineeti", "Parth", "Pooja", "Pradeep", "Prakash", "Priya", "Rajesh", "Rajni", "Rakesh", "Raman", "Ravi", "Rekha", "Rhea", "Rohit", "Roshni", "Rupal", "Sachin", "Sakshi", "Samar", "Sarika", "Shivani", "Shivansh", "Shruti", "Shweta", "Simran", "Sohan", "Sourav", "Sridhar", "Srinivas", "Sudhir", "Sukanta", "Supriya", "Suresh", "Swathi", "Tanuja", "Tanya", "Tarun", "Tripti", "Uma", "Urvashi", "Vasudev", "Vidya", "Vikrant", "Vinay", "Vineet", "Vishal", "Vivek", "Yogesh", "Zoya"];

const last_name = ["Agarwal", "Ahuja", "Arora", "Bhalla", "Bhatia", "Chauhan", "Chopra", "Das", "Datta", "Dawar", "Dhar", "Gandhi", "Gaur", "Gupta", "Jain", "Jha", "Kapoor", "Kashyap", "Kaur", "Khanna", "Kohli", "Lal", "Mehta", "Mishra", "Mitra", "Nagpal", "Nair", "Narang", "Nayyar", "Pandey", "Pant", "Parikh", "Patel", "Patil", "Rao", "Reddy", "Saha", "Sen", "Sharma", "Shukla", "Singh", "Sinha", "Tiwari", "Trivedi", "Verma", "Vohra", "Wadhwa", "Yadav", "Bose", "Chatterjee", "Dasgupta", "Ganguly", "Ghosh", "Guha", "Banerjee", "Bhattacharya", "Dey", "Dutta", "Mukherjee", "Sarkar", "Chakraborty", "Roy", "Sengupta", "Majumdar", "Bhattacharjee", "Choudhury", "Das", "Saha", "Chakravarty", "Ghoshal", "Roychoudhury", "Bhowmik", "Mukhopadhyay", "Mitra", "Banerjee", "Nag", "Saha", "Pal", "Mondal", "Kundu", "Sarkar", "Bharadwaj", "Bhatt", "Rai", "Nayar", "Menon", "Nambiar", "Nathan", "Menon", "Mohan", "Chand", "Rajan", "Nair", "Pillai", "Soman", "Nambiar", "Sivaraman", "Kurup", "Nair", "Gopinath", "Krishnan", "Vijayan", "Prakash", "Mohanan"];

const cities = ["Ahmedabad", "Bengaluru", "Chennai", "Delhi", "Hyderabad", "Kolkata", "Mumbai", "Pune", "Aurangabad", "Bhopal", "Chandigarh", "Coimbatore", "Faridabad", "Gurgaon", "Guwahati", "Jaipur", "Lucknow", "Nagpur", "Nashik", "Patna", "Surat", "Thane", "Vadodara", "Varanasi", "Visakhapatnam", "Amritsar", "Agra", "Aligarh", "Allahabad", "Bhubaneswar", "Calicut", "Gwalior", "Indore", "Jabalpur", "Jammu", "Kanpur", "Ludhiana", "Madurai", "Meerut", "Moradabad", "Muzaffarnagar", "Noida", "Ranchi", "Solapur", "Udaipur", "Vijayawada", "Bareilly", "Dehradun", "Jodhpur", "Kota", "Rajkot", "Shimla", "Tiruchirappalli", "Vellore", "Warangal", "Ajmer", "Akola", "Bhiwandi", "Bhavnagar", "Bokaro", "Dhanbad", "Gorakhpur", "Jhansi", "Kolhapur", "Rourkela", "Srinagar", "Thiruvananthapuram", "Ujjain"];


//this request use for display all data in web using ejs
app.get('/page/:page', (req, res) => {
    let ids = ["id", "First_Name", "Last_Name", "Contact_No", "City", "Email", "University_id", "createdAt",];
    let page_id = req.params.page;
    conn.query(`select * from student_express limit 0,${page_id}`, (err, result, filed) => {
        res.render("page", { data: result, id: ids, page: 1 });
    });
});

app.get('/', (req, res) => {
   
    let page = req.query.page || 1;
    let limit = 10;
    let value = (page - 1) * limit;
    let ids = ["id", "First_Name", "Last_Name", "Contact_No", "City", "Email", "University_id", "createdAt"];
    conn.query(`select * from student_express limit ${value},${limit}`, (err, result, filed) => {
        if (page == 1) {
            prev = 0;
        }
        else {
            prev=parseInt(page)-1;
        }
        if (page == 150 || page==0) {
            page = 1;
        } else {
            page++;
        }
        
        res.render("page", { data: result, id: ids, page: page, prev: prev });
    });

});

//this request use for insert a list of data in mysql
app.get('/insert-list', (req, res) => {
    for (let i = 1; i <= 1500; i++) {
        let randomForName = Math.floor(Math.random() * first_name.length);
        let randomForLastName = Math.floor(Math.random() * last_name.length);
        let email = first_name[randomForName] + last_name[randomForLastName] + "@gmail.com"
        let randomCity = Math.floor(Math.random() * cities.length)
        let contact = Math.floor(Math.random() * 900000000);
        let university_id = Math.floor(Math.random() * 10) + 1;

        var insert_query = `INSERT INTO student_express (First_Name, Last_Name, Contact_No, City, Email, University_id, createdAt) VALUES ('${first_name[randomForName]}', '${last_name[randomForLastName]}', '${contact}', '${cities[randomCity]}', '${email}', ${university_id}, NOW() + INTERVAL FLOOR(RAND() * 365) DAY + INTERVAL FLOOR(RAND() * 24) HOUR + INTERVAL FLOOR(RAND() * 60) MINUTE + INTERVAL FLOOR(RAND() * 60) SECOND)`;
        conn.query(insert_query, (err, result, field) => {
            if (err) {
                return console.log(err.message);
            }
        });

    }

    return res.send("All List Data inserted Successfully.");

});

//this get request use for serach record based on user query
// app.get('/search-item/:query',(req,res)=>{
//     let query='%'+res.body.query+'%';
//     conn.query(`SELECT * FROM practice.student_express where student_express.First_Name like '${query}'`,(err,result,filed)=>{
//         if(err){
//             return console.log(err.message);
//         }else{
//             return console.log(result);
//         }
//     })
// });

app.listen(3000, () => {
    console.log('server is running on 3000');
});