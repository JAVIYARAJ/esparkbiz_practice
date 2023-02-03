let rows=prompt("Enter Number of Rows");
let cols=prompt("Enter Number of columns");
   
// document.write('<table border="1", width="50%",height="60%", align="center">');

    

//     //header    
//     for(var i=0;i<cols;i++){
//         if(i==0){
//             document.write('<tr>');
//         }
//         document.write(`<th>${i+1}</th>`);
//         if(i==cols){    
//             document.write('</tr>');
//         }
    
//     }

//     //content   
//     for(var k=0;k<rows;k++){
//         for(var i=0;i<cols;i++){

//             let data=`(
//                 ${k+1},${i+1}
//             )`; 

//             if(i==0){
//                 document.write('<tr>');
//             }   
//             document.write(`<td style="text-align: center">${data}</td>`);
//             if(i==cols){
//                 document.write('</tr>');
//             }
//         }
//     }

    
// document.write('</table>');


var table=document.getElementById("dynamic_table");

// var tbody=document.createElement("tbody");

for(let i=0;i<rows;i++){
    var newTr=document.createElement("tr");
    //newTr.classList.add(i);
    table.appendChild(newTr);   
    
    for(let j=0;j<cols;j++){    
        var newTd=document.createElement("td");
        newTr.appendChild(newTd);
        //newTr.classList.add(j);
        newTd.appendChild(document.createTextNode("Hover me"));
    }
    
}


var alltr=document.querySelectorAll("td");

alltr.forEach((value,number)=>{
    value.addEventListener("mouseover",()=>{
        //node.innerHTML=node.parentNode.classList[0];
        value.style.backgroundColor="red";
    });
});


alltr.forEach((node)=>{
    node.addEventListener("mouseout",()=>{
            //node.innerHTML="Hover Me";
        node.style.backgroundColor="white";
    });
});

