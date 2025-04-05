//singleton
//litrally ki tara declare karte hai to singleton nhi banata hai
//constructor se agr banenga to singleton // Object.create
//object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "mohit",
    "fullname": "mohit nemade",
    [mySym]: "mykey1",
    age: 18,
    location: "jalgaon",
    email:"mohit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]


}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["fullname"]);


// console.log(typeof JsUser[mySym]);

JsUser.email = "mohit@chatgpt"
Object.freeze(JsUser)

JsUser.email = "mohit@microsoftgpt"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log('hello js user');

    
}
JsUser.greetingtwo = function(){
    console.log(`hello js user , ${this.name}`);

    
}
console.log(JsUser.greeting());

console.log(JsUser.greetingtwo());








