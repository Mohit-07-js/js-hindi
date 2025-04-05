// const tinderUser = new Object()//singleton object
const tinderUser = {} //non singletomn object

tinderUser.id = "123abc"
tinderUser.name ="sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "mohit",
            lastName: "nemade"
        }
    }
}
// console.log(regularUser.fullName?.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 =  Object.assign({},obj1,obj2)//{} is a target and other are source , if this symbol is not given thwn all vales goes obj1  is used in assign function to join objects
const obj3 = { ...obj1,...obj2}
// console.log(obj3);

const user = [
    {
        id:1,
        email:"mohit@gmail.com",

    },
    {
        id:1,
        email:"mohit@gmail.com",

    }, {
        id:1,
        email:"mohit@gmail.com",

    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));//har yek key value ko array ko bana diya hai 

// console.log(tinderUser.hasOwnProperty('isLogged'));//is used to find if the property is ersent or not



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "mohit",
}
//course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);



const navbar = ({company}) => {//curly braces is used for destructuring 

}
navbar(company = "mohit")

// {
//     "name": "mohit",
//     "coursename": "js in hindi",
//     "price": "free"
// }
[
    {},
    {},
    {},
]
