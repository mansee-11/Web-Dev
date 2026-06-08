//lect15

// import React from 'react'
// import College from './College'
// const Home = ({data}) => {      //or by taking normal varialble ex- a
//   // console.log(data)             //print by a.data
//   return (
//     <div>Home <College a={data}/></div>
//   )
// }

// const New = () => {
//   return (
//     <div>hiiiiiii</div>
//   )
// }

// export {New}
// export default Home

//lect 22

// import React from 'react'
// import College from './College'

// const Home = () => {
//   return (
//     <div><College/></div>
//   )
// }

// export default Home

import React,{useEffect ,} from 'react'

const Home = ({apiData,SetApiData,cart,SetCart}) => {
  useEffect(()=>{
    async function apiCall(){
        let res= await fetch("https://dummyjson.com/products")
        let data= await res.json()
        SetApiData(data.products)
      }
      apiCall()
  },[])
  return (
    <div id='parent'>
      {
        apiData.map((a)=>{
          return(<div id='child'>
          <img   src={a.thumbnail}/>
          <h4>{a.title}</h4>
          <h6>{a.price}</h6>
          <button onClick={()=>SetCart([...cart,a])}>add</button>
          </div>)
        })
      }
    </div>
  )
}

export default Home