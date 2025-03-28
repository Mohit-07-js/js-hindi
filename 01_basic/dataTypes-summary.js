// primitive data types
// ttal 7 types : 1. string , 2.number , 3.boolean , 4. null, 5. undefined , 6.symbol (used to make the value unique) , 7.bigint


const score = 100
const scoreValue = 100.3
const isLoggedIn = false

const outSideTemp = null 
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 334570934556577865n

//non primitive or reference data types
// non primitive data type typeeoff === function anf for function its says as object functiomn

// Array , objects , functions 

const heros = ["shaktiman", "naagraj","doga"];
let myObj = {//object are wrriten i curly braces in the form of key value pair
    name: "mohit",
    age:22,
}

const myFunction = function(){

    console.log("hello world");
    
}

console.log(typeof bigNumber);
console.log(typeof outSideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);///object function   
console.log(typeof anotherId);
console.log(typeof score);
console.log(typeof isLoggedIn);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof heros);
console.log(typeof myObj);





//**********************memory**************** */

//  stack (primitive), Heap (non-primitive)
// stack memory used as we declared a variable we get a copy of variable 
// and a memory is defined as heap or Object it will get original value reference if we change the reference value then original value aslo changes


let myYoutubename  = "hiteshchoudhary.com"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "mohit@gogle.com"
console.log(userOne);
console.log(userTwo);


