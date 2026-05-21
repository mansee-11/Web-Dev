// import data from "./new.js" default mai alag name de sakte hai aur ek hi chiz export hoti hai
// import add from "./new.js"
// console.log(data)
// add()

// import {sum,a} from "./new.js"

// sum(10,40)
// console.log(a)

// //pure function
// function pro(x){
//     return x*2;
// }

// console.log(pro(5));
// //impure function
// let count=0;
// function increase(){
//     count++;
//     return count;
// }
// console.log(increase())
// console.log(increase())
// console.log(increase())
// //function curr
// function add(a)
// {
//     return function (b)
//     {
//         if(b)
//         {
//             return add(a+b);
//         }
//         return a;
//     }
// }

// console.log(add(9)(1)(5)(7)()) 

let arr=[2,3,4];
let nums=[...arr,1,5,6];
// let ans=nums.concat(arr)
console.log(arr)
console.log(nums)

let obj={
    id:11,
    name:"mansee"
}
console.log(obj)

let obj1={
    ...obj,
    age:19
}
console.log(obj1)

function sum(a,b,c,...nums){
    console.log(nums);
}
sum(1,2,3,4,5,6,7,8,9)

// let arr1=[1,2,3,4,5]
// let [c,b,a]=arr1 not possible
// console.log(arr1) 

let obj2={
    id:1,
    name:"mansee"
}

let {id,name}=obj
console.log(obj)

// let h1= document.querySelector("h1")
// h1.innerText="hello"

//using jquery

$("h1").text("hiii").css("color","red")
