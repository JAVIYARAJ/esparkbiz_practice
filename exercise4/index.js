var edu_counter = 0;
var exe_counter = 0;
addEducationCard();
addEdxperienceCard();
addRefrenceCard();

function addEducationCard() {
    edu_counter++;
    var edu_card = document.getElementById("edu_info");
    var create_div = document.createElement("div");
    create_div.classList.add("edu_component");
    var content = `
    <div>
        <div class="dbl_input">
            <div class="col">
            <label for="edu_board${edu_counter}">Name of Course</label>
            <input type="text" name="edu_course${edu_counter}" id="edu_course${edu_counter}">
            </div>
            <div class="col">
                <label for="edu_board${edu_counter}">Name of Board</label>
                <input type="text" name="edu_board${edu_counter}" id="edu_board${edu_counter}">
            </div>
            <div class="col">
                <label for="edu_passing_year${edu_counter}">Passing year</label>
                <input type="text" name="edu_passing_year${edu_counter}" id="edu_passing_year${edu_counter}">
            </div>
            <div class="col">
                <label for="edu_per${edu_counter}">Percentage</label>
                <input type="text" name="edu_per${edu_counter}" id="edu_per${edu_counter}">
            </div>
        </div></div>`;

    create_div.innerHTML = content;
    edu_card.appendChild(create_div);
}

function addEdxperienceCard() {
    exe_counter++;
    var edu_card = document.getElementById("exe_info");
    var create_div = document.createElement("div");
    var content = `
    <div class="dbl_input">
    <div class="col">
        <label for="exe_company_name${exe_counter}">Company Name</label>
        <input type="text" name="exe_company_name${exe_counter}" id="exe_company_name${exe_counter}">
    </div>
    <div class="col">
        <label for="exe_designation${exe_counter}">Designation</label>
        <input type="text" name="exe_designation${exe_counter}" id="exe_designation${exe_counter}">
    </div>
    <div class="col">
        <label for="exe_from${exe_counter}">From</label>
        <input type="date" name="exe_from${exe_counter}" id="exe_from${exe_counter}">
    </div>
    <div class="col">
        <label for="exe_to${exe_counter}">To</label>
        <input type="date" name="exe_to${exe_counter}" id="exe_to${exe_counter}">
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
    // console.log(candidate_data);
}

let class_list1 = ["edu_course", "edu_board", "edu_passing_year", "edu_per"];
let data = [];
function getEducationInfo() {
    let main={};
    for (let i = 1; i <= edu_counter; i++) {
        let data_list=[];
        class_list1.forEach((value, index) => {
            var data = document.getElementById(`${value}${i}`);
            data_list[index]=data.value;
        });
        main[i]=data_list;
    }
    console.log(main);
}
let class_list2 = ["exe_company_name", "exe_designation", "exe_from", "exe_to"];

function getExperienceInfo() {
    let main={};
    for (let i = 1; i <= exe_counter; i++) {
        let data_list=[];
        class_list2.forEach((value, index) => {
            var data = document.getElementById(`${value}${i}`);
            data_list[index]=data.value;
        });
        main[i]=data_list;
    }
    console.log(main);
}

