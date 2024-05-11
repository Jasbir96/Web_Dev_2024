

let arr = [10, 20, 30, 40, 60, 70];
// for (let i = 0; i < arr.length; i++) {
//     console.log("array index", i, " value ", arr[i]);
// }

// important
// remove and add  an elemnt from the start 

// arr.shift();

// arr.unshift(100);
// // remove and add an element from the end
// arr.pop()
// arr.push(1000);
// console.log(arr);
//element find,index
// includes -> whether an element is present in your array or not

// const isPresent = arr.includes(10);
// const index = arr.indexOf(30);
// console.log(isPresent,index);


// slice and splice
// sidx
// eidx -> new Array(sidx, eidx - 1)
// slice
let newArr = arr.slice(1, 4);
// console.log("newArr", newArr);
// console.log("arr", arr);

//splice
// sidx, count
let spliceArr = arr.splice(2, 3);
console.log("slicedArr", spliceArr);
console.log("arr", arr);


