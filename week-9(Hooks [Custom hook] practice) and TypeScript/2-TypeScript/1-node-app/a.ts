// const x:number=1;
// console.log(x);
// function greeting(firstName:any){  // any could be string, boolean, number, null, undefined
//     console.log("hello "+ firstName);
// }
// greeting("world");

// function sum(number1:number,number2:number):number{  // we can even do this to get specfic type of returned value
//     return(number1+number2);
// }
// console.log(sum(45,10));

// task: create a fx that takes another fx and run it after 1 sec
// function square(num:number){
//     return num*num;
// }
// function example(num1:number,num2:number,fx:(n:number)=>number){
//     const sq1=fx(num1);
//     const sq2=fx(num2);
//     setTimeout(()=>{
//         console.log(sq1+sq2);
//     },1000); 
// }
// example(2,3,square);
//another example of same task
// function example(fx:()=>number):Promise<number>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             const result= fx();
//             resolve(result);
//         },1000); 
//     }) ;
// }
// example(()=>{
//     console.log("hii there..."); 
//     return 5;
// })
// .then((val)=>{
//     console.log(val);
// }) 

// Interfaces
// interface User{
//     name:string,
//     age:number
// }
// const user:User={name: "Aman", age: 22};
// console.log(user);

// task: create a function that retuns true if user's age is greater than 18

// interface User{
//     name:string,
//     age:number
// };
// function isLegal(user1:User):boolean{
//     setTimeout(()=>{
//         console.log("User name is "+user1.name);
//     },2000);
//     if(user1.age>18)return true;
//     else return false;
// }
// const validUser=isLegal({name:"Aman",age:22});
// console.log(validUser)

//Implementing interfaces
// interface Person{
//     name:string;
//     age:number;
//     greet(phrase:string):void;
// }
// class Employee implements Person{
//     name:string;
//     age:number;
//     constructor(n:string,a:number){
//         this.name=n;
//         this.age=a;
//     }
//     greet(phrase:string){
//         console.log(`${phrase} ${this.name}`)
//     }
// }
// const e=new Employee("Aman",22);
// console.log(e);

//Types (similar to interfacces, types let you aggregate data together)
// type User={
//     firstName:string;
//     lastName:string;
//     age:number
// }
// //types 1: Union
// type StringOrNumber = string|number;
// function printId(id:StringOrNumber){
//     console.log(`ID: ${id}`)
// }
// printId(101);
// printId("254");

//types 2:intersection
// type Employee={
//     name:string;
//     startDate:Date;
// };
// type Manager={
//     name:string;
//     startDate:string;
// };
// type TeamLead=Employee & Manager;
// const teamLead:TeamLead={
//     name:"Aman";
//     startDate:new Date();
//     department:"saiyan";
// }

// Array in TS
// function maxValue(arr:number[]){
//     let max=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;
// }
// Array of object

// interface User{
//     firstName:string;
//     lastName:string;
//     age:number;
// }
// function filterUsers(user:User[]){
//  //simple example...for this array   
// }

// Enum

// enum Direction{
//     Up,
//     Down,
//     Left,
//     Right
// }
// enum Direction{
//     Up=1,   //if we initialise it as 1 or anyother number the below directions have automatically assigned 2,3,4 
//     Down,
//     Left,
//     Right
// }
// enum Direction{
//     Up="up",    // another way to use enum
//     Down='down',
//     Left="left",
//     Right="right"
// }
// function doSomething(keyPressed:Direction){
//     if(keyPressed==Direction.Up){

//     }
// }
// doSomething(Direction.Up)
// doSomething(Direction.Down)
// console.log(Direction.Up)
// console.log(Direction.Down)
// console.log(Direction.Left)
// console.log(Direction.Right)

//Common usecase of enum in express
// const app = require('express');
// enum ResponseStatus{
//     Success =200,
//     NotFound=404,
//     Error=500
// }
// app.get('/',(req,res)=>{
//     if(!req.query.userId){
//         res.status(ResponseStatus.Error).json({})
//     }
// })
