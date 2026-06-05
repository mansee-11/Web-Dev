// import React, { useEffect, useState } from 'react'

// const Todo = () => {
//     const [task,setTask] = useState("");
//     const[todos,setTodos] = useState(()=>{
//         let data =localStorage.getItem("key")
//         if(data)
//         {
//             return JSON.parse(data)
//         }
//         return []
//     });

//     useEffect(()=>{
//         localStorage.setItem("key",JSON.stringify(todos))
//     },[todos])
//     function fun1(){
//         setTodos([...todos,task])
//         console.log(todos)
//     }
//     function fun2(id){
//         let UpdatedData = todos.filter((a,b)=>{
//             return b!=id
//         })
//         setTodos(UpdatedData)
//     }
//     function fun3(id)
//     {
//         let data = prompt("enter new task")
//         let UpdatedData =[...todos];
//         UpdatedData[id]=data;
//         setTodos(UpdatedData)
//     }
//   return (
//     <div id='parent'>
//         <h1>Todo List</h1>
//         <div id='card'>
//             <input type='text' name='task' value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Enter a Task'/>
//             <button onClick={fun1}>Add</button>
//         </div>
//         <div id='tasks'>
//             {
//                 todos.map((a,b)=>{
//                     return(
//                     <div id='task'>
//                         <span>{a}</span>
//                         <button onClick={()=>fun3(b)}>Edit</button>
//                         <button onClick={()=>fun2(b)}>Delete</button>
//                     </div>)

//                 })
//             }
//         </div>
//     </div>
//   )
// }

// export default Todo

//second option 
// import React, { useEffect, useState } from 'react'

// const Todo = () => {
//     const [task,setTask] = useState("");

//     const [index,setIndex] = useState(null)

//     const[todos,setTodos] = useState(()=>{
//         let data =localStorage.getItem("key")
//         if(data)
//         {
//             return JSON.parse(data)
//         }
//         return []
//     });

//     useEffect(()=>{
//         localStorage.setItem("key",JSON.stringify(todos))
//     },[todos])

//     function fun1(){
//         if(task.trim()=="")
//         {
//             return;
//         }
//         if(index!==null){
//             let UpdatedData =[...todos];
//             UpdatedData[index]=task;
//             setTodos(UpdatedData)
//             setTask("")
//             setIndex(null)
//         }
//         else{
//             setTodos([...todos,task])
//             setTask("")
//         }
//     }
//     function fun2(id){
//         let UpdatedData = todos.filter((a,b)=>{
//             return b!=id
//         })
//         setTodos(UpdatedData)
//     }
//     function fun3(id)
//     {   
//         setIndex(id)
//         setTask(todos[id])
//     }
//   return (
//     <div id='parent'>
//         <h1>Todo List</h1>
//         <div id='card'>
//             <input type='text' name='task' value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Enter a Task'/>
//             <button onClick={fun1}>{index!==null?"Update":"Add"}</button>
//         </div>
//         <div id='tasks'>
//             {
//                 todos.map((a,b)=>{
//                     return(
//                     <div id='task'>
//                         <span>{a}</span>
//                         <button onClick={()=>fun3(b)}>Edit</button>
//                         <button onClick={()=>fun2(b)}>Delete</button>
//                     </div>)

//                 })
//             }
//         </div>
//     </div>
//   )
// }

// export default Todo


//third option

import React, { useReducer } from 'react'

const Todo = () => {

    let initial={
        input:"",
        todos:[],
        index:null
    }

    function reduce(state,action){

        if(action.type == "set_inp")
        {
            return{
                ...state,
                input:action.payload
            }
        }

        else if(action.type == "add_todo"){
            return{
                ...state,
                todos:[...state.todos,state.input],
                input:""
            }
        }

        else if(action.type == "del_todo"){
            return{
                ...state,
                todos:state.todos.filter((a,b)=>{
                    return b!=action.payload
                })
            }
        }

        else if(action.type=="update_todo"){
            let updateTodos=[...state.todos]
            updateTodos[state.index]=state.input
            return{
                ...state,
                todos:updateTodos,
                input:"",
                index:null
            }
        }

        else if(action.type=="edit_todo"){
            return{
                ...state,
                input:state.todos[action.payload],
                index:action.payload
            }
        }

    }

    let [state,dispatch] =useReducer(reduce,initial)

    function handleSubmit(){
        if(state.index!==null){
            dispatch({type:"update_todo"})
        }else{
            dispatch({type:"add_todo"})
        }
    }

    return (
        <div id='parent'>
            <h1>Todo List</h1>
            <div id='card'>
                <input name='input' placeholder='Enter a task' value={state.input} onChange={(e)=>dispatch({type:"set_inp",payload:e.target.value})}/>
                <button onClick={handleSubmit}>{state.index!==null?"Update":"ADD"}</button>
            </div>
            <div id='tasks'>
                {
                    state.todos.map((a,b)=>{
                        return(<div id='task'>
                            <span>{a}</span>
                            <button onClick={()=>dispatch({type:"del_todo",payload:b})}>Delete</button>
                            <button onClick={(e)=>dispatch({type:"edit_todo",payload:b})}>Edit</button>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Todo