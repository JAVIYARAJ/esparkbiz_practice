
// "use strict"
// function data(city,name="raj"){
//     console.log(`${name} ${city}`);
// }

// function sum(...values){
//     let sum=0;
//     values.forEach((n)=>{
//         sum+=n;
//     });
//     console.log(sum);
// }



// // data("kanjha");
// sum(10,20,30);

// let names=new Map([
//     ["raj",6001],
//     ["meet",6002],
//     ["mn",6003],
// ]);

// names.set("viren",6009);    
// console.log(names);

// console.log("6"/"2");


// let str="raj";
// function change(){
//     str="javaiya raj";

// }

// change();
// console.log(str);
// console.log(str);

// let arrowFun=a=>a;
// console.log(arrowFun(2));

// let name=prompt("Enter your name",100);
// console.log(name);

// let obj={
//         name:"raj",
//         age:21,
//         temp(){
//             let arr=()=>alert(this.name);
//             arr()
//         },
//     }




// console.log(obj.temp());

// let a=10;
// let b=a;
// let obj={
//     name:"raj",
// };
// let obj1=obj;

// obj1.name="raj javiya";


// console.log(obj===obj1);

// console.log(a===b);

// let obj = {
//     name: "raj",
// };

// let clone={};

// for(let key in obj){
//     clone[key]=obj[key];
// }

// console.log(clone)

// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = Object.assign({}, user);
  
//   alert( user.sizes === clone.sizes ); // true, same object
  
//   // user and clone share sizes
//   user.sizes.width = 60;    // change a property from one place
//   alert(clone.sizes.width); //


// let user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
  
//   let clone = structuredClone(user);
//   user.sizes.width=10;
//   console.log(user);
//   console.log(user.sizes.width);
//   console.log(clone);
//   console.log(clone.sizes.width);

// function f1(name,age){
//     this.name=name,
//     this.age=age;
// }

// let obj=new f1("raj",21);
// console.log(obj);