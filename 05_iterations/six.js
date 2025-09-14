// const coding = ['js','python','java','cpp','ruby']
// // const value = coding.forEach((item) =>{//for each does not return any value
// //     console.log(item);
// //     return item
    
// // } )
// // console.log(value);
const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter((nums) => nums>4)
//const newNums = myNums.filter((nums) => {return nums>4})// when we use curly braces then we must have to put return stmt to return values
//console.log(newNums);//filter use then we have call back function milenga lekin uke bad dene padati hai condition jo jo values condition ko satisfy karenge vo vo values return hongi  this is basic of filter


const newNums = []/// same condition using for each loop

myNums.forEach((num) =>{
    if(num>4){
        newNums.push(num)      
    }
})
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);