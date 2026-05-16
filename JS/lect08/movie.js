let btn=document.querySelector("button")
let main=document.getElementById("main")

async function getmovie(){
    main.innerHTML=""
    let inp=document.getElementById("option").value

    let responce =await fetch(`https://api.tvmaze.com/search/shows?q=${inp}`);
    
    let data=await responce.json()
    console.log(data)
    for(let i of data)
    {
        let m=document.createElement("img")
        m.setAttribute("src",i.show.image.medium)
        main.appendChild(m)
    }
}