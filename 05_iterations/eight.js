const myNums = [1,2,3]

//const temp = 0
//  const totalNums = myNums.reduce(function(accmulator,currentvalue){
//        console.log(`acc ${accmulator}and currval ${currentvalue}`);
//      return accmulator + currentvalue
// },0)//0 or temp depend upun initialize

const totalNums = myNums.reduce((accmulator,currentvalue) => {
    console.log(`acc ${accmulator}and currval ${currentvalue}`);
    
    return accmulator + currentvalue},0)
console.log(totalNums);


const shoppingCart = [
    {
        itemname :'js course',
        price : 2999
    },
   {
        itemname :'python course',
        price : 999
    },
    {
        itemname :'data sci course',
        price : 5999
    },
    {
        itemname :'mobile dev course',
        price : 12999
    },
]
const pricetopay = shoppingCart.reduce((acc,item)=> {return acc+item.price},0)
console.log(pricetopay);
