// let t1="esparkbiz ahemdabad esparkbiz";
// let p1=/esparkBiz/ig; 
// let r1=t1.match(p1); //output: return all esparkbiz matches
// console.log(r1);

// let t2="esparkbiz ahemdabad esparkbiz12 esparkbiz12";
// let p2=/esparkBiz[0-9]/ig;  
// let r2=p2.exec(t2) //ouput: one value get
// console.log(r2);

// let t3="esparkbiz ahemdabad esparkbiz12 esparkbiz12";
// let p3=/esparkBiz[0-9]/ig;  
// let r3=t3.match(p3); //output: two value get
// console.log(r3);

// let t4="esparkbiz ahemdabad esparkbiz12 esparkbiz12";
// let p4=/esparkBiz[^0-9]/ig;   //return result any if 0-9 number not present in text.
// let r4=t4.match(p4); //output: esparkbiz 
// console.log(r4);


// let t5="1 esparkbiz ahemdabad esparkbiz esparkbiz";
// let p5=/esparkbiz/ig;    
// let r5=p5.test(t5);
// console.log(r5);

// let t6="1 esparkbizz ahemdabad esparkbiza esparkbizc";
// let p6=/esparkbiz[a-z]/ig;    
// // let p6=/esparkbiz[abc]/ig;    
// let r6=t6.match(p6);
// console.log(r6);


// let t7="1 esparkbizb ahemdabad esparkbiz esparkbiz";
// let p7=/esparkbiz(a|b|c)/ig;    
// let r7=t7.match(p7);
// console.log(r7);

// let t8="1 javiya";
// let p8=/[0-9]+$/ig;    
// let r8=t8.match(p8);
// console.log(r8);


let t="1234567890";
let p=/^\\d{10}/;
let res=p.test(t);
console.log(res);