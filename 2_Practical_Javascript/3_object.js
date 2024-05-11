/***
 * objects -> is collection key and value pair
 * name:"Steve"
 * lastName:"Rogers",
 * adress : sdmnv,
 * friend: sdnv,ndsjv
 * ***/


let cap = {
    name: "Steve",
    lastName: "Rogers",
    address: {
        city: "NewYork",
        state: "Manhatten"
    },
    age: 35,
    isAvenger: true,
    movies: ["First Avenger", "Winter soldier", "civil War"],
    sayHi: function () {
        console.log("Cap say's Hi");
    }
}
// // variable
// let key = "lastName";
// //property
// cap.key = "Hello";
// // 
// console.log("cap key", cap[key]);

/***
 * read , update , delete
 * **/
// read /get -> . operator
// console.log("Name", cap.name);
// console.log("lastName", cap.lastName);
// console.log("Age", cap.age);
// console.log("city", cap.address.city);
// console.log("second movie", cap.movies[1]);

// // update
// cap.isAvenger = false;
// console.log("status", cap.isAvenger);
// // delete
// delete cap.isAvenger;
// console.log("````````````````````");
// console.log("cap", cap);

// iterate
// for (let key in cap) {
//     console.log(key, " : ", cap[key]);
// }
