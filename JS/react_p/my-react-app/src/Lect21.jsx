import React, { useReducer } from 'react'

const Lect21 = () => {
    let [state,dispatch] =useReducer(fun,0) // function , starting value of state
    let [bg,dis] = useReducer(fun2,"white")
    function fun(state,action){
        if(action.type=="inc"){
            return state+1;
        }
        else if(action.type == "dec")
        {
            return state-1;
        }
        else if(action.type == "reset")
        {
            return 0;
        }
        return state;
    }
    function fun2(bg,action)
    {
        if(action.type=="yellow"){
            return "yellow"
        }
        else if(action.type == "blue")
        {
            return "blue"

        }
        else if(action.type == "red")
        {
            return "red"
        }
        else if(action.type == "black")
        {
            return "black"
        }
        else if(action.type == "white")
        {
            return "white"
        }
        else if(action.type == "green")
        {
            return "green"
        }
        return bg;
    }
  return (
    <div style={{backgroundColor:bg, height:"100vh", width:"100vw"}}>
        <h2>{state}</h2>
        <button onClick={()=>dispatch({type:"inc"})}>Add</button>
        <button onClick={()=>dispatch({type:"dec"})}>Sub</button>
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        <div>
            <button onClick={()=>dis({type:"black"})}>black</button>
            <button onClick={()=>dis({type:"blue"})}>blue</button>
            <button onClick={()=>dis({type:"red"})}>red</button>
            <button onClick={()=>dis({type:"yellow"})}>yellow</button>
            <button onClick={()=>dis({type:"green"})}>green</button>
            <button onClick={()=>dis({type:"white"})}>white</button>

        </div>
    </div>
  )
}

export default Lect21