//let myDate=new Date();//object

/*
console.log(myDate.toString()); //Sun Mar 17 2024 07:12:13 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());//Sun Mar 17 2024

console.log(myDate.toISOString());//2024-03-17T07:12:13.675Z

console.log(myDate.toLocaleString());//3/17/2024, 7:12:13 AM
*/
// let myDate=new Date(2024,0,26);//month starts with 0.

//another way
 let myDate=new Date("2024-01-26");
// console.log(myDate.toDateString());

//TimeStamp
let myTimeStamp=Date.now();//milisecond
console.log(myTimeStamp);
// console.log(myDate.getTime());

/* convert it into seconds */
console.log(Math.floor(Date.now()/1000));