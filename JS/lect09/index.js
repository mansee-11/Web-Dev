// localStorage.setItem("key","value")
// localStorage.setItem("mansee","student")
// console.log(localStorage.getItem("key"))
// console.log(localStorage.getItem("xyz")) //return null 
// localStorage.removeItem("key")

let form=document.querySelector("#form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // console.log(form[0].value);
    // console.log(form[1].value);
    // console.log(form[2].value);
    let data={
        name:form[0].value,
        email:form[1].value,
        mob:form[2].value,
        pass:form[3].value
    }
    localStorage.setItem("user1",JSON.stringify(data))
})
// let y=JSON.parse(localStorage.getItem("user1"))
// console.log(y)
// let n=document.querySelector("#n")
// n.innerText=y.name
// let e=document.querySelector("#e")
// e.innerText=y.email
// let m=document.querySelector("#m")
// m.innerText=y.mob
// let p=document.querySelector("#p")
// p.innerText=y.pass
let login=document.querySelector("#login")
login.addEventListener("submit",(e)=>{
    e.preventDefault()
    let x=document.createElement("div")
    let data=JSON.parse(localStorage.getItem("user1"))
    if(data===null) x.innerText="INVALID USER"
    if(login[0].value===data["email"] && login[1].value===data["pass"]) x.innerText="successfully login"
    else x.innerText="INVALID USER"
    login.appendChild(x)
})

// let remove=document.querySelector("#remove")
// remove.addEventListener("click",()=>{
//     n.innerText=""
//     e.innerText=""
//     m.innerText=""
//     p.innerText=""
// })