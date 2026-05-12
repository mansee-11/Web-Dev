let h1=document.querySelectorAll("h1")
console.log(h1) //linklist
for(let x of h1){
    x.style.color="red"
}

// let h2= document.querySelector("h2")
// let name=prompt("enter your name")
// h2.innerText=h2.innerText+ " "+name

let y=h1[0].innerText
console.log(y)

let h3=document.querySelector("h3")
// h3.innerText="addd later"

let input=document.querySelector("input")
let btn=document.querySelector("button")

let val
input.addEventListener("input",function(e){
    // console.log(e.target.value)
    // h3.innerText=e.target.value
    val=e.target.value
})

btn.addEventListener("click",function(){
    h3.innerText=val
})