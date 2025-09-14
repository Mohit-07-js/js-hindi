const myNums = [1,2,3,4,5,6,7,8,9]
//const newNums = myNums.map((num) => num + 10 )
//const newNums = myNums.map((num) =>{return num + 10}  )//when we use scops we must have to use return stmt to return the value otherwise its shows undefined in the arrsy not a empty array

// myNums.forEach((num) => {//using for each functoin

//     console.log(num+10);
    
// })

const newNums = myNums.map((num) => num*10).map((num) => num +1 ).filter((num) => num>=40)//filter usus true and false to check the condition if condition is true then return that stmt and we can add as much we want chaining butt after chaining contains the result of the before ones
console.log(newNums);
