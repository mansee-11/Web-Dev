let canvas= document.querySelector("canvas")
let pen= canvas.getContext("2d")

let cell=50
let cellQ=[[0,0]]

let gameover=false
let direction='right'
let score=0

function food_generate(){
    return[
        Math.floor(Math.random()*950/50)*50,
        Math.floor(Math.random()*450/50)*50
    ]
}
let randomc=food_generate()

document.addEventListener("keydown",function(e){

    if(e.key=='ArrowDown'){
        direction='down'
    }
    else if(e.key=='ArrowUp'){
        direction='up'
    }
    else if(e.key=='ArrowLeft'){
        direction='left'
    }
    else if(e.key=='ArrowRight'){
        direction='right'
    }
})

let id=setInterval(()=>{
    draw()
    update()
},250)

function draw()
{
    pen.shadowBlur=0
    pen.fillStyle='yellow'
    if(gameover){
        clearInterval(id)
        pen.fillStyle='white'
        pen.font='50px sans-sarif'  
        pen.fillText(`Game over`,600,400)
        return;
    }
    pen.clearRect(0,0,1000,500);
    for(let i of cellQ)
    {
        pen.shadowColor = 'rgba(0,0,0,0.4)';
        pen.shadowBlur = 10;
        pen.fillRect(i[0],i[1],cell,cell)
    }
    pen.shadowBlur=0
    pen.font='30px sans-sarif'
    pen.fillText(`score: ${score}`,40,100)
    pen.fillStyle='red'
    if(score!=0 &&score%5==0){
        pen.fillStyle='chartreuse'
        pen.shadowColor = 'rgba(57, 150, 43, 0.8)';
        pen.shadowBlur = 15;
    }
    pen.fillRect(randomc[0],randomc[1],cell,cell)
}

function update()
{
    let x=cellQ[cellQ.length-1][0]
    let y=cellQ[cellQ.length-1][1]
    let newx
    let newy
    if(direction=='down'){
        newx=x
        newy=y+cell
        if(newy==500)
        {
            gameover=true
        }
    }
    else if(direction=='up'){
        newx=x
        newy=y-cell
        if(newy<0)
        {
            gameover=true
        }
    }
    else if(direction=='left'){
        newx=x-cell
        newy=y
        if(newx<0)
        {
            gameover=true
        }
    }
    else if(direction=='right'){
        newx=x+cell
        newy=y
        if(newx==1000)
        {
            gameover=true
        }
    }
    for(let i of cellQ)
    {
        if(i[0]==newx && i[1]==newy)
        {
            gameover=true
        }
    }
    if(newx==randomc[0] && newy==randomc[1]){
        randomc=food_generate()
        if(score!=0 && score%5==0){
            score+=2
        }
        else{
            score+=1
        }
    } 
    else{
        cellQ.shift()
    } 
    
    cellQ.push([newx,newy])
}