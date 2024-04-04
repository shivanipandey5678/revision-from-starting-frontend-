let name= ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let number= [32, 30, 26, 28, 44];


// [
// 	{name: "Nrupul", age: 32},
// 	{name: "Prateek" , age: 30},
// 	{name: "Aman" , age: 26},
// 	{name: "Albert" , age: 28},
// 	{name: "Yogesh" , age: 44},
// ]

let data=[];
for(let i=0;i<name.length;i++){
   let obj={};
  obj.name=name[i];
  obj.age=number[i];
  data.push(obj);
};
consol.log(data);

