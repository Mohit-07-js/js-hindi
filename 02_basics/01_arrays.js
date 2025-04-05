//array

const myArr = [0,1,2,3,4,5]
//javascript arr are resizable
//array elements canot acces using arbiraty strings
// console.log(myArr[0]);

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);


//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()//removes last elements form array
myArr.unshift(9)//add value at the start of the arrayand shift all the values
myArr.shift()//the added 9 at the start get removeed from arrayy 
// console.log(myArr.includes(9));//icludes (9)to find number in array gives output in boolean 
// console.log(myArr.indexOf(3));//if the value are not present in the array then it shows -1 value and if value is present then it show the index of the value


const newArr = myArr.join()//join used to bind the array and also convert it into stringd

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));


//slice  , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);//its take value from array starting from index we given and end index is not consider in array and original array remain intacat 
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3);//splice manuplates the original array and output is given along it(1,2,3) splioce array is 1,2,3
console.log(myn2);
console.log("c", myArr);


    

















