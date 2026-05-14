fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>{
    return data.json()
}).then((val)=>{
    let body=document.querySelector("body")
    for(let a of val){
        let uid1=document.createElement("div")
        let id1=document.createElement("div")
        let title1=document.createElement("div")
        let c1=document.createElement("div")
        let uid2=document.createElement("div")
        let id2=document.createElement("div")
        let title2=document.createElement("div")
        let c2=document.createElement("div")
        let p=document.createElement("div")
        uid2.innerText=a.userId
        id2.innerText=a.id
        title2.innerText=a.title
        c2.innerText=a.completed
        uid1.innerText="User ID : "
        id1.innerText="ID : "
        title1.innerText="Title : "
        c1.innerText="Completed : "
        p.appendChild(uid1)
        p.appendChild(uid2)
        p.appendChild(id1)
        p.appendChild(id2)
        p.appendChild(title1)
        p.appendChild(title2)
        p.appendChild(c1)
        p.appendChild(c2)
        body.appendChild(p)
    }
})
.catch((err)=>{
    console.log(err)
})

