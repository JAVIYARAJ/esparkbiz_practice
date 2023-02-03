/*
var data = [];
let main = document.getElementById('main');

let cityList = ['junagadh', 'somnath', 'rajkot', 'Anand', 'surat', 'bhavnagar', 'patan', 'kutch', 'bharuch'];

for (let i = 0; i <= 1000; i++) {
    let college_id_random = Math.floor(Math.random() * 10) + 1;
    let city_random = Math.floor(Math.random() * cityList.length);
    let random = Math.floor(Math.random() * 2000);

    let r1 = Math.floor(Math.random() * 9023415241);
    let fname = `xyz${random}`;
    let lname = `abc${random}`;
    let email = `example${random}@gmail.com`;
    let phoneNumber = `${r1}`;
    let college_id = `${college_id_random}`;
    let city = `${cityList[city_random]}`;
    let time = `CURRENT_TIMESTAMP`;
    let query = `insert into practice.STUDENT_MASTER (FIRST_NAME,LAST_NAME,PHONE_NUMBER,EMAIL,COLLEGE_ID,CITY,CREATED_AT) values('${fname}','${lname}','${phoneNumber}','${email}',${college_id},'${city}',${time});`
    data[i] = query;

    let p = document.createElement('p');
    p.innerHTML = data[i];
    main.appendChild(p);
}

*/


/*
let college = ['gtu', 'spu', 'marvadi', 'atmiya', 'gujrat', 'saurastra', 'Ganpat', 'darshan', 'om', 'nobal', 'narshihmehta'];
for (let x = 0; x < college.length; x++) {
    let sample = `insert into practice.UNIVERSITY_MASTER(UNIVERSITY_NAME) values('${college[x]}');`;
    data[x] = sample;

    let p = document.createElement('p');
    p.innerHTML = data[x];
    main.appendChild(p);
}
*/
