


function sayMyName(){
    console.log("m");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
    
}


// sayMyName()




// function addTwoNumbers(number1,number2){//function inputs are called as parameters
//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1,number2){//function inputs are called as parameters
    
    // let result =number1 + number2
    //return result
    return number1+ number2//after result noting willbe printed 
    
    
    
}
const result = addTwoNumbers(3, 5)//function calls then its call arguments

// console.log("result:", result);



function loginUserMessage(username ="sam"){
    if(!undefined){//usernaame === unefined
        console.log("please enter a username");
        return


    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("mohit"));

// console.log(loginUserMessage(" "));
// console.log(loginUserMessage("mohit"));

function calculatecartprice(val1,val2,...num1){//... is a rest or spread operator
    return num1

}
// console.log(calculatecartprice(200,400,500,2000));

const user ={
    username: "mohit",
    prices: 99
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// 
handleobject({
    username: "sam",
    price: 399
})
const myNewArray = [200,400,100,600]
function returnsecodvalue(getarray){
    return getarray[1]
}
// console.log(returnsecodvalue(myNewArray));


console.log(returnsecodvalue([200,400,500,100,5000]));