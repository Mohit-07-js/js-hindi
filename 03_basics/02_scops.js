let a = 300
if (true){
    let a= 10 
    const b = 20 
    // var c = 30// 
    //console.log("inner :",a);
    

}

//console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Mohit"
    function two(){
        const Website = "youtube"
       // console.log(username);

        
    }
    two()
    //console.log(Website);

    
}
one()

function one(num){
    return num +1
}
console.log(one(5));


/// the add two store h=the value in the variable that cause error is it initialize before the  =function 
const Addtwo = function(num){
    return num +1
}
Addtwo(5)