const score=400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toFixed(2));//.toFixed() -> used in e-commerce website

const value=new Number(124.5689);
// console.log(value.toPrecision(5));//round of kind off..use it carefully

const number=1100000000;
// console.log(number.toLocaleString());//Us Standard
// console.log(number.toLocaleString('en-IN'));//Indian standard

// ++++++++++++++++++++++++Math++++++++++++++++++++++++++++
// console.log(Math.abs(-5));
// console.log(Math.round(7.7));
// console.log(Math.ceil(3.2));
// console.log(Math.floor(9.9));
// console.log(Math.min(5,8,6,1,8,2));
// console.log(Math.max(12,42,11,43,55,10));

//console.log(Math.random());//bydeafult value comes in range of 0-1

//important
const min=1;
const max=6;
console.log(Math.floor(Math.random()*(max-min+1))+min);//main formula
