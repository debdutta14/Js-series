//'this' always refer to the current context.
const user={
    username:"Deb",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome back.`);
    }
} 

// user.welcomeMessage();
// user.username="Deb Dutta";
// user.welcomeMessage();

//console.log(this);//blank object in node environment

//this keyword dont work in function

// function chai(){
//     //console.log(this);//returns some information
//     let username="Deb Dutta";
//     console.log(this.username);///this will show undefine

// }



// const chai = () =>{
//     console.log("Arrow function");
// }
// chai();



// pure arrow function---implicit return
const chai=(num1,num2)=> (num1+num2);

console.log(chai(7,9));

//if we wrap in {} then we must write return 
// if we wrap in () then we don't have to write return

const obj=()=>({username: "Deb"});
console.log(obj());