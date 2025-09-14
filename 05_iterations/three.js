//for of loop
//["","",""]
//[{},{},{}]
const arr = [1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}
const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`greets of each char is ${greet}`);
    
    
}
const map = new Map()
map.set('IN','India')
map.set('USA','United states of america')
map.set('fr','France')//maps are added in unique values does not repeat values id repeated and always display in order you inserted
map.set('IN','India')
// console.log(map);
// for (const key of map) {//prints all the map values one by one
//     console.log(key);
    
// }
for (const [key,value] of map) {//this way we can acces the key and value pair sepratly
    //console.log(key ,":-",value);  
}
const myobject = {//in this way we cannot iterate objects using for of loop 
    game1: 'NFS',
    game2: 'spiderman'
}
// for (const [keys,value] of myobject) {
//     console.log(key ,":-",value);  

    
// }