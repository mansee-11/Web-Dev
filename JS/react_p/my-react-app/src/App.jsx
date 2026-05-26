// import React from 'react'
// import { useState } from 'react'
// let count=0
// // function fun1(){     by default funcional components are static 
// //   count++            and object-classes component is dynamic 
// //   console.log(count)      
// // }
// function App() {
//   let [count,SetCount] =useState(0)   //we use useState to make function dynamic
//   function fun1(){
//     SetCount(++count)
//   }

//   function fun2(){
//     SetCount(--count)
//   }

//   let [color,setColor] = useState("gold")
//   function fun3(){
//     setColor("pink")
//   }
//   return (<div style={{backgroundColor:color,width:"200px",height:"200px"}}>
//     {/* <h1>Mansee</h1>
//     <h2>hello</h2> */}
//     <h2>{count}</h2>
//     <button onClick={fun1}>Addd</button>
//     <button onClick={fun2}>sub</button>
//     <button onClick={fun3}>color</button>
//   </div>)
// }

// export default App

import React from 'react'
import Home from './Home'
import {New} from './Home'

const App= () => {
  let user="mansee"
  return (
    <div><Home data={user}/>
      <New/>
    </div>
  )
}

export default App