let score=33;
console.log(typeof(score));//number

score="33";
console.log(typeof(score));//string

// let intValueOfScore=Number(score); //N in captial
// console.log(typeof(intValueOfScore));//number

score="33abc"
intValueOfScore=Number(score);
console.log(typeof(intValueOfScore));//NaN-> not a number..but in my compiler showing number.

// for true->1 && false-> 0
// null-> 0 
//unndefine -> NaN
// string->NaN
