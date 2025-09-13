const user = {
    username :"mohit",
    price : 999,

    WelcoMemessage: function(){
        //console.log(`${this.username} , welcome to website`);
        //console.log(this);
        
        

    }
}
user.WelcoMemessage()
user.username = "sam"
user.WelcoMemessage()
// function chai(){
//     let username = "mohit"
//     console.log(this.username);
    
// }prints undefinde 
const chai = () => {
    let username = "mohit"
    console.log(this.username);
//this aslo prints undefined
}
chai()
// if arrow function can user this also works

// const Addtwo = (num1,num2) => { 
//     return num1 + num2 explicite function 
// }
// const Addtwo = (num1,num2) =>  (num1 + num2)
const Addtwo = (num1,num2) =>  ({username: "hitesh"})//user name we have wrap in the paranthess pnly)

console.log(Addtwo(3,4))//implicite function

const myarray = [2,5,3,7,4]
myarray.forEach()
