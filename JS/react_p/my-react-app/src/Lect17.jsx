import React, { useEffect, useState } from 'react'

// const Lect17 = () => {
//     let[count,SetCount] =useState(0)
//     console.log("hello")  //agar normally yeh liknege to jab count ki value change hogi tab tab yeh phir se chalega
//   return (
//     <div>
//         <h2>{count}</h2>
//         <button onClick={()=>SetCount(++count)}>Adddddd</button>
//     </div>
//   )
// }

const Lect17 = () => {
    // let[count,SetCount] =useState(0)
    // let[city,SetCity] =useState("Damoh")

    // useEffect(()=>{        //help to do task only once not everytime as value of variable changes 
    //     console.log("hello") 
    // },[])

    // useEffect(()=>{        //only change when city change
    //     console.log("hello") 
    // },[city])
//   return (
//     <div>
//         <h2>{count}</h2>
//         <h2>{city}</h2>
//         <button onClick={()=>SetCount(++count)}>Addddd</button>
//         <button onClick={()=>SetCount(--count)}>Subbbb</button>
//         <button onClick={()=>SetCity("Sagar")}>Nani ka ghar</button>
//     </div>
//   )
    let [ApiData,SetData] = useState([])

    useEffect(()=>{
        async function call(){
            let res= await fetch('https://dummyjson.com/products')
            let data= await res.json()
            SetData(data.products)
            console.log(data.products)
        }
        call()
    },[])
    return(
        <div id='parent'>
            {
                ApiData.map((a)=>{
                    return(
                    <div id='child'>
                        <h2>{a.title}</h2>
                        <img src={a.thumbnail}></img>
                        <div id='details'>
                            <p>{a.description}</p>
                            <span>price : {a.price}$</span>
                            <span>Discount : {a.discountPercentage}</span>
                            <span>Rating : {a.rating}</span>
                        </div>
                        <button>Add to cart</button>
                    </div>)
                })
            }
        </div>
    )
}

export default Lect17