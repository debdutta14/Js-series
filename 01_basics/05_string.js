let myName=new String("Deb Dutta");
let myAge=23;
//String Interpolation: modern way to print string
console.log(`Hello my name is ${myName} & I'm ${myAge} years old.`)

//console.log(myName.__proto__);
//console.log(myName.length);
//console.log(myName.toUpperCase());//not changing the actual variable
//console.log(myName.charAt(5));
//console.log(myName.indexOf('D'));

let str=myName.substring(0,3);
let str1=myName.slice(-4,7);
//console.log(str1);
let role="    Developer   "
//console.log(role);
//console.log(role.trim());
let url="https://debdutta%20portfolio.com"
console.log(url.replace("%20","/"))
console.log(url.includes("portfolio"))
let strLine=new String("This is a new string to understand split function")
console.log(strLine.split(" "));
