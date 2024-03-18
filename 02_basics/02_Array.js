const marvel=["ironman","Spiderman","thor"];
const dc=["batman","superman","aquaman"];

//if we directly push dc into marvel it will add that entire array in single index.

//to merge two array we need to perform concat
//concat returns new array
/*
const all_hero=marvel.concat(dc);
console.log(all_hero); 
*/
//we can also do that with spread operator
const all_hero=[...marvel,...dc];
console.log(all_hero);

//now make complicated array into single one
const newArray=[1,5,3,[4,2],9,5,[6,[8,1,7]]];
const real_array=newArray.flat(Infinity);//returns new Array
//console.log(real_array);

//to check array or not -> .isArray() -> true/false

//to convert anything into array
//console.log(Array.from("Deb Dutta"));

//array make
let a=10;
let b=20;
let c=30;
console.log(Array.of(a,b,c));//->[10,20,30]