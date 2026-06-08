//lect14

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


//lect15

// import React from 'react'
// import Home from './Home'
// import {New} from './Home'

// const App= () => {
//   let user="mansee"
//   return (
//     <div><Home data={user}/>
//       <New/>
//     </div>
//   )
// }

// export default App

//lect16

// import React, { useState } from 'react'

// const App = () => {
//   let [input,SetInput] = useState("")
//   let[data,SetData]=useState([])
//   function fun1(e){
//     SetInput(e.target.value)
//     // console.log(input)
//     // console.log(e.target.value)
//   }
//   function fun2()
//   {
//     // SetData(input)
//     console.log(data)
//   }
//   return (
//     <div>
//       <h2>{data}</h2>
//       <input type='text' placeholder='Enter your name' onChange={fun1}/>
//       <button onClick={fun2}>click</button>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Form from './form'
// import './App.css'
// const App = () => {
//   return (
//     <div><Form/></div>
//   )
// }

// export default App


// //lect17

// import React from 'react'
// import Lect17 from './Lect17'
// import './App.css'
// const App = () => {
//   return (
//     <div><Lect17/></div>
//   )
// }

// export default App


//lect 18


// import React from 'react'
// import Lect18 from './Lect18'
// import './App.css'
// const App = () => {
//   return (
//     <div><Lect18/></div>
//   )
// }

// export default App


//lect 19

// import React from 'react'
// import Lect19 from './Lect19'
// import Home from './Home'
// import College from './College'
// import Form from './form'
// import './App.css'
// import { Route, Routes } from 'react-router-dom'
// const App = () => {
//   return (
//     <div>
//       <Lect19/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/college' element={<College/>}/>
//         <Route path='/login' element={<Form/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App


//lect20

// import React from 'react'
// import Todo from './Todo'
// import './App.css'
// const App = () => {
//   return (
//     <div><Todo/></div>
//   )
// }

// export default App


//lect 21

// import React from 'react'
// import Lect21 from './Lect21'
// const App = () => {
//   return (
//     <div><Lect21/></div>
//   )
// }

// export default App


//lect22
// main-> app-> home-> college

// import React from 'react'
// import Home from './Home'
// const App = () => {
//   return (
//     <div><Home/></div>
//   )
// }

// export default App


import React, { useState , useEffect} from 'react'
import { Routes , Route} from 'react-router-dom'


import Lect19 from './Lect19'
import Home from './Home'
import Cart from './Cart'
import Form from './Form'
import './App.css'

const App = () => {
  let [apiData,SetApiData] =   useState([])
  let [cart,SetCart]= useState([])
  return (
    <div>
      <Lect19/>
      <Routes>
        <Route path="/" element={<Home apiData={apiData}  SetApiData={SetApiData} cart={cart}  SetCart={SetCart}/>}/>
        <Route path="/form"/>
        <Route path="/cart" element={<Cart cart={cart}/>}/>
      </Routes>
    </div>
  )
}

export default App