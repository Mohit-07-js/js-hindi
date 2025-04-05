const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);//it converts number into strings and the we can use all string functions like length uppercase etc

// console.log(balance.toFixed(2));//to fixed is used for calculation purpose to decimal number if we give number 2 the it add decimal and 2 zeros at the end of the string


const otherNumber = 123.8966
//console.log(otherNumber.toPrecision(4));//give percision value we given number it percize to approximate value 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//converts the number into the readable form bydefault its sets as us foem by function en-in we can convert to inian form


//++++++++++++++++++++++++++==maths+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4));// abs means absolute value used to change the sign change -ve value to +value

// console.log(Math.round(4.3));//used to round off the decimal values

// console.log(Math.ceil(4.2));// if a number is in decimal or in short if a number is some little amount aslo greater than 4 like 4.2 its round of to higher number 5

// console.log(Math.floor(4.9));//floor round of to is start value 4 if in decimal given 4.9 its round of is 4 only because of floor function

// console.log(Math.min(4,2,7,4));//used to find minimun number in the given lists 

// console.log(Math.max(9,4,8,2,1,0));// used to find maximum means greater number in the given list


console.log(Math.random());//used to value form (0to 1)
console.log((Math.random()*10) + 1); // gives value form (1 to 11) because decimal shifts by multip[ly 10
console.log(Math.floor(Math.random()*10) + 1);
const min = 10 
const max = 20


console.log(Math.floor(Math.random()  * (max - min + 1 )) + min )//use to radom number from 10 to 20


