import React from 'react'

const Lect27 = () => {
    // console.log(Array.prototype);
    // console.log(Object.prototype);
    // console.log(String.prototype);

    let arr=[1,2,3,4,5]
    // console.log(arr.toString())

    // let data=arr.map((a,b,c)=>{
    //     return a+2;
    // })

    Array.prototype.myMap=function(cb){
        let res=[]

        for(let i=0;i<this.length;i++)
        {
            res.push(cb(this[i],i,this))
        }
        return res
    }

    let data=arr.myMap((a,b,c)=>{
        return a+2;
    })
    console.log(data)

    Array.prototype.myFilter=function(cb){
        let res=[]

        for(let i=0;i<this.length;i++)
        {
            if(cb(this[i],i,this))
            {
                res.push(this[i])
            }
            
        }
        return res
    }
    let fil=arr.myFilter((a,b,c)=>{
        return b!=2
    })

    console.log(fil)

    Array.prototype.myforEach=function(cb){

        for(let i=0;i<this.length;i++)
        {
           cb(this[i],i,this)
        }
        
    }

    arr.myforEach((a,b,c)=>{
        console.log(a)
    })
    
    // let add=arr.reduce((a,b,c,d)=>{
    //     return a+b
    // })

    // console.log(add)

    Array.prototype.myReduce=function(cb,init=0){
        let sum=init
        for(let i=0;i<this.length;i++)
        {
            sum=cb(sum,this[i],i,this)
        }
        return sum
    }

    let add=arr.myReduce((a,b,c,d)=>{
        return a+b
    })
    console.log(add)

    Array.prototype.myFind=function(cb){
        for(let i=0;i<this.length;i++)
        {
            if(cb(this[i],i,this))
            {
                return this[i]
            }
        }
    }

    let find=arr.myFind((a,b,c)=>{
        return b!=2
    })
    
    console.log(find)

  return (
    <div>Lect27</div>
  )
}

export default Lect27