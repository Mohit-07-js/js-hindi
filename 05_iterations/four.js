const myobject = {
    java : 'javascript',
    cpp : 'c++',
    php : 'python',
}
// for (const key in myobject) {//prints key pair
//     console.log(myobject[key]);  
// }
// for (const key in myobject) {//prints only value pair
//     console.log(key);  
// }
for (const key in myobject) {//we use foe in loop to iterate objects
    //console.log(`${key} short form of file ${myobject[key]}`);   
}

const programming = ['js','py','cpp','rb','java']

// for (const key in programming) {//prints the keys of the arrays in for in loop arrys keys are thereindex number and in objects there keys are user assigned values
//     //console.log(key);
// }
for (const key in programming) {//this way we can iterate an array in the for in loop 
    console.log(programming[key]);
 
}
const map = new Map()
map.set('IN','India')
map.set('USA','United states of america')
map.set('fr','France')
map.set('IN','India')

// for (const key in map) {
//     console.log(map[key]);
//     //maps are not iterable using this for in loop output is n
  
// }