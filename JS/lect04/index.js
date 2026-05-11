// 'use strict'  using strict mode give this as undefined  not window 
function sum(){
    console.log(this)
}
sum()

var a=5      //global variables
let b=10
const c=15

{            //block level var can be accessed let & const can't
    var a=100
    let b=200
    const c=300
}
console.log(a)
console.log(b)
console.log(c)

function sum(){      //function level even var can't be accessed
    var x=10
}
//console.log(x)    will give reference error

if(false)           //if-else level if not run then can't access y value undefined
{
    var y=20
    let z=30
}
else{
    console.log("hehehe")
}
console.log(y)   //undefined
//console.log(z)     reference error


console.log(this) //without object it reffer to window
var id=23
let student={
    id:11,
    name:"mansee",
    isPass:true,
    // sum:function(){
    //     console.log("hello")
    //     console.log(this)  //inside a object reffer to student now
    //     console.log(this.id) id from parent object
    // }
    // sum:()=>{
    //     console.log(this.id) //this not work in arrow fuction take parent's parent data give 23 
    // }
    sum:function(){
        s=()=>{
            console.log(this.id) // parent is sum then its parent is student so give 11 
        }
        s()
    }
}

for(let key in student)
{
    console.log(student[key])
    // console.log(student.key)
}
student.sum()

function outer(){
    let username="mansee"
    function inner(){
        console.log(username)
    }
    return inner
}
let fn=outer()
fn()

// let btn=document.querySelector("button") by name
// let btn=document.querySelector("#one") by id
//let btn = document.querySelector(".two") by class
// let btn=document.getElementsByClassName("two") return array use btn[0]
let btn=document.getElementById("one")  //directly by id
let body=document.querySelector("body")

btn.addEventListener("click",function(){
    body.style.backgroundColor="black"
})