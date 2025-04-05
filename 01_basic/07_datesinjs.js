//dates 

let myDate = new Date()
// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());


// console.log(myDate.toJSON());

// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());


// console.log(typeof(myDate));

let myCreatedDate = new Date(2025,0,5)
// console.log(myCreatedDate.toDateString());


let myCreatedDate1 = new Date(2025,0,5,5,3)
// console.log(myCreatedDate1.toLocaleString());


let myCreatedDate2 = new Date("01-18-2025")
// console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);//value are in milisec
// console.log(myCreatedDate2.getTime());//value are in milisec

// console.log(Math.floor(Date.now()/1000));//gives values in sec 

// but if want to compare values we must compare in milisec only
let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getMilliseconds());

// console.log(newDate.getSeconds());
// console.log(newDate.getTime());
// console.log(newDate.getTimezoneOffset());

// '${newDate.getDay()}an the time is'


newDate.toLocaleString('default',{
    weekday: "long"



})