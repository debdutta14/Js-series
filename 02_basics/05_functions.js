//passing multiple argument
//rest operator:- ...num1

// function addToCart(...num1){
//     return num1; 
// }
// console.log(addToCart(200,500,750,100));

//play with objects
const user={
    "username":"Deb Dutta",
    "price":5000
}
function handleObjects(anyObjects){
    console.log(`This is for ${anyObjects.username} and price for it ${anyObjects.price} Rs`);
}

// handleObjects(user);

// handleObjects({
//     "username":"Sky",
//     "price": 100
// })