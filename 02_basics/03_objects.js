//singleton

//by literals
const mySym=Symbol("Key1");
const JsFile={
    name:"deb",
    age:23,
    "Gender":"male",
    Dept:"Developer",
    [mySym]:"mykey1",//thats how we use Symbol in an object
}

//there are two ways to access data->
console.log(JsFile.name);//we can't access gender by this syntax in previous version
console.log(JsFile["name"]);
console.log(JsFile.Gender);
console.log(JsFile[mySym]);//by this we can see symbol

/* access data in objects */
JsFile.name="Deb Dutta";
//console.log(JsFile);

//if we want our objects to be unchangeable: then we can freez it
//it will not through error but it will also not change
//Object.freeze(JsFile);
//JsFile.name="Deb Dutta 14";
//console.log(JsFile);

/* we can Add function to our objetcs */
JsFile.greeting=function(){
    console.log("Hello Js User");
}

JsFile.greetingTwo=function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsFile.greeting());
console.log(JsFile.greetingTwo());