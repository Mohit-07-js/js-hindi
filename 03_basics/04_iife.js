(function chai(){//this function is a name IIFE function
    console.log(` DB CONNECTED`);
})();//problm with global scops pollution usko hatane ke liye humne iife use kiya

( (name) => {//unnamed ifffe
    console.log(`DB CONNECTED TOW ${name}`);
    
})("hitesh");