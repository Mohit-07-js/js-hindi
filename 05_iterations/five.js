const coding = ['js','python','java','cpp','ruby']
coding.forEach( function (val){//use to iterate  array using for each loopnig stmt
    // console.log(val);   
})

coding.forEach( (item) =>{//call back function calling using arrow function
    // console.log(item);
})
function printsme(item){//we can also first create a function 
    // console.log(item);
}
coding.forEach(printsme)//then call that functionusing for each loop 

coding.forEach((item, index, arr) => {// using for each function we can acces the index or full array also and given item present in the array also
    //console.log(item, index, arr);
})

const mycoding =[//in array in object uski property acces
    {
        languagename : 'javascript',
        languagefile : 'js'

    },
    {
        languagename : 'pyhton',
        languagefile : 'py'

    },
    {
        languagename : 'java',
        languagefile : 'java'

    }

]
mycoding.forEach((item)=> {
    console.log(item.languagefile);//using item.languagefile we can acces only file m=name and using languagename we can acces only name  and using item we can acces all valuess of object
    
    
})