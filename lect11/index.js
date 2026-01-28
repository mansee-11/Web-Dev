console.log("hello");

let btn= document.querySelector('button')
let body=document.querySelector('body')
let flag=true
btn.addEventListener("click",function(){
if(flag==true)
{
body.style.backgroundColor='black'
flag=false
}
else
{
body.style.backgroundColor='white'
flag=true
}  
})