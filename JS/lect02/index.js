console.log({}=={}) //will give false because it is non primptive data type so compare refrence
console.log([]==[]) //false same reason

let a={id:1,name:"mansee"}
console.log(a.id)
console.log(a.name)

let b=[1,2,3,"mansee",true] //array

for(let k in b)
{
    console.log(k)  //will print index
    console.log(b[k])  //will print value
}

for(let l of b)
{ 
    console.log(l) //will print value
}

//arrow function 

// sum() will give error sum not function because initilaze by undefined

// var sum=()=>{
//     console.log("hello") 
// }
// sum()

function sum(){
    console.log("hello")
}

console.log(a)
var a=5

