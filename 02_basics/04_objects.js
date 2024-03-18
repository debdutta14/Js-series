//combine objects
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj3={5:"e",6:"f"};

//const newObj=Object.assign({},obj1,obj2,obj3);//in this case empty object is the target and others are source
//console.log(newObj);
//console.log(obj1);

//or we can do spread operator
const newObj={...obj1,...obj2,...obj3};
console.log(newObj);

/* interesting methods */
// Objects.key(Some objects name) -> returns array of key of that objects
// Objects.values(Some objects name) -> returns array of values of that objects
// Objects.entries(Some objects name) -> returns array of key & value pair of that objects
//tinderObject.hasOwnProperty(property name);