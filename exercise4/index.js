addEducationCard();
addEdxperienceCard();
addRefrenceCard();

function addEducationCard() {
    var edu_card = document.getElementById("edu_info");
    var create_div = document.createElement("div");
    create_div.classList.add("edu_component");
    var content = `
    <div>
        <div class="dbl_input">
            <div class="col">
            <label for="edu_board">Name of Course</label>
            <input type="text" name="edu_course" class="edu_course">
            </div>
            <div class="col">
                <label for="edu_board">Name of Board</label>
                <input type="text" name="edu_board" class="edu_board">
            </div>
            <div class="col">
                <label for="edu_passing_year">Passing year</label>
                <input type="text" name="edu_passing_year" class="edu_passing_year">
            </div>
            <div class="col">
                <label for="edu_per">Percentage</label>
                <input type="text" name="edu_per" class="edu_per">
            </div>
        </div></div>`;

    create_div.innerHTML = content;
    edu_card.appendChild(create_div);
}

function addEdxperienceCard() {
    var edu_card = document.getElementById("exe_info");
    var create_div = document.createElement("div");
    var content = `
    <div class="dbl_input">
    <div class="col">
        <label for="exe_company_name">Company Name</label>
        <input type="text" name="exe_company_name" id="exe_company_name">
    </div>
    <div class="col">
        <label for="exe_designation">Designation</label>
        <input type="text" name="exe_designation" id="exe_designation">
    </div>
    <div class="col">
        <label for="exe_designation">From</label>
        <input type="date" name="exe_designation" id="exe_designation">
    </div>
    <div class="col">
        <label for="exe_designation">To</label>
        <input type="date" name="exe_designation" id="exe_designation">
    </div>
</div>
`;

    create_div.innerHTML = content;
    edu_card.appendChild(create_div);
}

function addLangaugeCard() {
    let lang_name = prompt("Enter Language Name");
    if (lang_name === null) return;
    var lang_card = document.getElementById("lang_info");
    var create_div = document.createElement("div");
    var content = `
    <div id="lang_cols">
        <input type="checkbox" name="lang_name" id="lang_hindi" value="${lang_name}">
        <label for="lang_hindi">${lang_name}</label>
        <input type="checkbox" name="lang_read" id="lang_read" value="read">
        <label for="lang_read">Read</label>
        <input type="checkbox" name="lang_speak" id="lang_speak" value="speak">
        <label for="lang_speak">Speak</label>
        <input type="checkbox" name="lang_write" id="lang_write" value="write">
        <label for="lang_write">Write</label>
    </div>
    `;

    create_div.innerHTML = content;
    lang_card.appendChild(create_div);
}
function addTechnologyCard() {
    let tech_name = prompt("Enter Technology Name");
    if (tech_name === null) return;
    var tech_card = document.getElementById("tech_info");
    var create_div = document.createElement("div");
    var content = `
    <div id="lang_cols">
        <input type="checkbox" name="lang_name" id="lang_hindi" value="${tech_name}">
        <label for="lang_hindi">${tech_name}</label>
        <input type="radio" name="lang_read" id="lang_read" value="Beginner">
        <label for="lang_read">Beginner</label>
        <input type="radio" name="lang_speak" id="lang_speak" value="Mideator">
        <label for="lang_speak">Mideator</label>
        <input type="radio" name="lang_write" id="lang_write" value="Expert">
        <label for="lang_write">Expert</label>
    </div>
    `;
    create_div.innerHTML = content;
    tech_card.appendChild(create_div);
}
function addRefrenceCard() {
    var pref_card = document.getElementById("pref_info");
    var create_div = document.createElement("div");
    var content = `
    
    <div class="dbl_input">
        <div class="col">
            <label for="pref_name">Person Name</label>
            <input type="text" name="epref_name" id="epref_name">
        </div>
        <div class="col">
            <label for="pref_number">Contact Number</label>
            <input type="text" name="pref_number" id="pref_number">
        </div>
        <div class="col">
            <label for="pref_relation">Relation</label>
            <input type="text" name="pref_relation" id="pref_relation">
        </div>

    </div>
    `;
    create_div.innerHTML = content;
    pref_card.appendChild(create_div);
}


let id_list = [
    "fname", "lname", "designation", "address1", "address2", "email", "phone", "city", "gender", "state", "relationship", "dob"
];

function getBasicInfo() {
    var candidate_data = [];

    id_list.forEach((id, index) => {
        candidate_data[index] = document.getElementById(id).value;
    });
    console.log(candidate_data);
}

let class_list = [".edu_course", ".edu_board", ".edu_passing_year", ".edu_per"];

function getEducationInfo() {
    var data = [
        {
            "id":1,
            "course_name":"SSC",
            "board":"Gujarat",
            "percentage":85,
            "year":2023
        }
    ];

    var edu_length = document.querySelectorAll(".edu_component");
    // var counter=edu_length.lengthl*2;
    let json={};
    class_list.forEach((data,index)=>{
        let value=[];
        var course = document.querySelectorAll(data);
        course.forEach((data,index)=>{
            value[index]=data.value;
        })
        json[index]=value;
    });
}