const name = "mohit"
const repocount = 5
// console.log(name + repocount + " value");
console.log(`Hello my name is ${name} and my reo count is ${repocount}`);

const gameName = new String('mohit-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);//used to find if any symbol like $ used 

console.log(gameName.length); // used to calc the length of string
console.log(gameName.toUpperCase());// used to uppercase all elements of string 
console.log(gameName.charAt(2));// used to specify the specific character in a string with its index number
console.log(gameName.indexOf('t'));//used to find at which position your character is located in the string


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)// only slicing we can give negative value and negative vale string strts from end 

console.log(anotherString);


const newStringOne = "     mohit     "
console.log(newStringOne);
console.log(newStringOne.trim());//it removes extra spaces from your string example for email and password uses
 
const url = "https://mohit.com/mohit%20nemade"

console.log(url.replace('%20', '-'));//used to replace specific words from the string

console.log(url.includes('mohit'));//used to find if the given word is present in the string or not answer given in bollean value

console.log(gameName.split('-'));//it splits basis on dash as given in the string and convert the string ito array

