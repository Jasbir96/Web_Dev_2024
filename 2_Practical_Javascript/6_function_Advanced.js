




// funnction def
function sayHi(param) {
    console.log("i am param -> ", param);
    param();
    return true;
}



//  function -> variable treat 

function inner() {
    console.log("I am inner");
}

sayHi(inner);













// function call
// sayHi();
// console.log("`````````````````");
// sayHi("Hello");
// console.log("```````````````````");
// sayHi(10);
// sayHi(true);
// let a = [10, 20, 30];
// sayHi(a);
// let obj = {
//     name: "Jasbir"
// }
// // object 
// sayHi(obj);

