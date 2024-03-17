// const myArr=[5,8,9,"Deb",11,true,10]


/* add element */
// 

//consist element
// console.log(myArr.includes(7));//false
// console.log(myArr.indexOf('Deb'));

//bind array into string
// const newArr=myArr.join();

// console.log(myArr);
// console.log(newArr);//type string


//slice & splice

const myArr=[1,2,3,4,5,6];
console.log("A",myArr);

const myn1=myArr.slice(1,3);//slice function don't change the actual array
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3);
console.log(myn2);
console.log("C",myArr);// make it two different array.change the actual one


