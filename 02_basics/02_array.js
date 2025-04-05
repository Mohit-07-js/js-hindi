const marvel_heroes = ["thor","Ironman","spiderman"]
const dc_heroes = ["superman","flash","batman"]

// marvel_heroes.push(dc_heroes)//push existing array ko push karata hai 
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes)//concat uses new array tyo join two array 
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes]

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//USED T ALL SUB ARRAY IN ONE ARRAY


console.log(real_another_array);


console.log(Array.isArray("mohit"));//to fine its is array or not answer given in boolean

console.log(Array.from("mohit"));//used to convert strings into array and array written string indivisual elements
console.log(Array.from({name: "mohit"}));//keys directrly are not converted to arrasy and written an empty array

let score1 = 100
let score2 = 200 
let score3 = 300
console.log(Array.of(score1,score2,score3));//returns a new array from set of elements






