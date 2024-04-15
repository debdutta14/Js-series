//Immediately Invoked Function Expressions (IIFE)
//If we want our function to run immediately after the code written we use iife
//also to reduce global pollution


(function chai(){
    //named IIFE
    console.log("Db Connected!");
})();//must give the semicolon

((name) => {
    //Simple IIFE
    console.log(`DB Connected again ${name}`);
})('Deb');
