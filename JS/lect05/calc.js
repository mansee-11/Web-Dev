let input = document.querySelector("input")
let button = document.querySelectorAll("button")

for(let btn of button){
    btn.addEventListener("click",()=>{
        let btnText=btn.innerText
        if(btnText==="C"){
            input.value=""
        }
        else if(btnText==="=")
        {
            input.value=eval(input.value)
        }
        else if(btnText==="del")
        {
            input.value =input.value.slice(0,-1)
            // input.value = input.value.substring(0, input.value.length - 1)
        }
        else
        {
            input.value+=btnText
        }
    })
}