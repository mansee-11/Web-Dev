import React, { useState } from 'react'


const Form = () => {
    let[input,SetInput]=useState({name:"",mob:"",email:""})
    let [data,SetData]=useState({name:"",mob:"",email:""})
    function fun1(e){
      let {name,value}= e.target
      SetInput({...input,[name]:value})
      console.log(input)
    }
    function fun2(e){
      SetData(input)
      console.log(data)
    }
  return (
    <div>
      <form>
        <input type='text'name='name' value={input.name} placeholder='Enter your name' onChange={fun1}/>
        <br></br>
        <br></br>
        <input type='text' name='mob' value={input.mob} placeholder='Enter your mob' onChange={fun1}/>
        <br></br>
        <br></br>
        <input type='text' name='email' value={input.email} placeholder='Enter your email' onChange={fun1}/>
        <br></br>
        <br></br>
        <button type='button' onClick={fun2}>Submit</button>
      </form> 
    </div>
  )
}

export default Form