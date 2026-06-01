import React, {useState, useEffect } from 'react'

//task 1

// const Lect18 = () => {
//     let [ApiData,SetData] = useState([])
//     let [data,SetD] = useState("")
//     useEffect(()=>{
//         async function call(){
//             let res= await fetch('https://dummyjson.com/products/search?q=phone')
//             let data= await res.json()
//             SetData(data.products)
//             console.log(data.products)
//         }
//         call()
//     },[])

    
//     function fun1(){
//         if(data=="")
//         {
//             alert("can't proced with empty data")
//             return
//         }
        
//         ApiData.map((a)=>{
//             if(data == a.brand)
//             {
//                 console.log(a.title)
//             } 
//         })
        
//     }
//   return (
//     <div>
//         <input id='input' type='text' onChange={(e)=>SetD(e.target.value)}/>
//         <button onClick={fun1}>Search</button>
//     </div>
//   )
// }

// export default Lect18


//task 2

// const Lect18 = () => {
//     let [ApiData,SetData] = useState([])
  
//     useEffect(()=>{
//         async function call(){
//             let res= await fetch('https://dummyjson.com/products')
//             let data= await res.json()
//             SetData(data.products)
//             console.log(data.products)
//         }
//         call()
//     },[])

//     return(
//         <div id='parent'>
//             {
//                 ApiData.map((a)=>{
//                     return(
//                     <div id='child'>
//                         <h2>{a.title}</h2>
//                         <img src={a.thumbnail}></img>
//                         <div id='details'>
//                             <p>{a.description}</p>
//                             <span>price : {a.price}$</span>
//                             <span>Discount : {a.discountPercentage}</span>
//                             <span>Rating : {a.rating}</span>
//                         </div>
//                         <button>Add to cart</button>
//                     </div>)
//                 })
//             }
//         </div>
//     )

// }

// export default Lect18


//task 3

// const Lect18 = () => {
//     let [ApiData,SetData] = useState([])
  
//     useEffect(()=>{
//         async function call(){
//             let res= await fetch('https://dummyjson.com/products')
//             let data= await res.json()
//             SetData(data.products)
//             console.log(data.products)
//         }
//         call()
//     },[])
//     function des(){
//         SetData([...ApiData].sort((b, a) => a.price - b.price))
        
//     }
//     function ass(){
//         SetData([...ApiData].sort((a, b) => a.price - b.price))
//     }
//   return (
//     <div id='parent'>
//         <button onClick={des}>Descending</button>
//         <button onClick={ass}>Assending</button>
//         {
//             ApiData.map((a)=>{
//                 return(
//                 <div id='child'>
//                     <h2>{a.title}</h2>
//                     <img src={a.thumbnail}></img>
//                     <div id='details'>
//                         <p>{a.description}</p>
//                         <span>price : {a.price}$</span>
//                         <span>Discount : {a.discountPercentage}</span>
//                         <span>Rating : {a.rating}</span>
//                     </div>
//                     <button>Add to cart</button>
//                 </div>)
//             })
//         }
//     </div>
//   )
// }

// export default Lect18


//task 5

// const Lect18 = () => {
//     let [ApiData,SetData] = useState([])
//     let [store,setStore] = useState([])
//     let [data,SetD] = useState("")
//     useEffect(()=>{
//         async function call(){
//             let res= await fetch('https://dummyjson.com/products/search?q=phone')
//             let data= await res.json()
//             SetData(data.products)
//             console.log(data.products)
//             setStore(data.products)
//         }
//         call()
//     },[])

//     let arr=[]
//     function fun1(){
//         SetData(store)
//         if(data=="")
//         {
//             return;
//         }
//         ApiData.map((a)=>{
//             if(data == a.brand)
//             {
//                 arr.push(a)
//             } 
//         })
//         SetData(arr)
//     }
//   return (
//     <div id='parent'>
//         <input id='input' type='text' onChange={(e)=>SetD(e.target.value)}/>
//         <button onClick={fun1}>Search</button>
//         {
//             ApiData.map((a)=>{
//                 return(
//                 <div id='child'>
//                     <h2>{a.title}</h2>
//                     <img src={a.thumbnail}></img>
//                     <div id='details'>
//                         <p>{a.description}</p>
//                         <span>price : {a.price}$</span>
//                         <span>Discount : {a.discountPercentage}</span>
//                         <span>Rating : {a.rating}</span>
//                     </div>
//                     <button>Add to cart</button>
//                 </div>)
//             })
//         }
//     </div>
//   )
// }

// export default Lect18


//task 6

