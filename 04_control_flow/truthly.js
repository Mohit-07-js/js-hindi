const userEmail = []//if there is empty strings is present in conditional stmt if occurs false value
//and if there is empty array present in conditional stmt it occurs true value
if (userEmail){
    console.log("got user email");
}else{
    console.log("did not get user email");
    
}
//falsy value
//false , 0 ,-0,BigInt 0n, "", null, undefined,NaN

//truthly value
// "0",'flase',[],{}," ",function(){}
if (userEmail.length === 0){
    console.log("array is empty");
    
}
const emptyObj = {}
 if (Object.keys(emptyObj).length===0){//Object.keys(emptyObj) this line forms object to array
    console.log("array is empty");

 }
// Nullish coalescing operator (??): null undefined
let val1;
// val1 = 5??10
val1 = null ?? 10
console.log(val1);

// terniary operator
// condition ? true : false
const Iceteaprice = 100 

Iceteaprice <= 80 ? console.log("LESS Than 80"): console.log("greater than 80");
