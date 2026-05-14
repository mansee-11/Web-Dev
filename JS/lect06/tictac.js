let box=document.querySelectorAll("#button")
let turn0 =true
let msgBox=document.querySelector("#msg")
let reset=document.querySelector("#reset")
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
reset.addEventListener("click",()=>{
    msgBox.innerText=""
    for(let a of box)
    {
        a.innerText=""
        a.disabled=false
    }
})
for(let a of box){
    a.addEventListener("click",()=>{
        if(turn0==true){
            a.innerText='0'
            turn0=false
            a.disabled=true
        }
        else{
            a.innerText='x'
            turn0=true
            a.disabled=true
        }
        winner()
    })
}

function winner(){
    for(let pattern of win){
        let x=box[pattern[0]].innerText
        let y=box[pattern[1]].innerText
        let z=box[pattern[2]].innerText

        if(x!="" && y!="" && z!=""){
            if(x===y && y===z)
            {
                msgBox.innerText= x +" "+" app jeet gayeeeeeee"
            }
        }
    }
}