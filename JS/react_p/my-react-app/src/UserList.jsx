import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


const UserList = () => {

    let list=["Mansee","Manya","Shubh","Shubhangi"]

    let navigate =useNavigate()

    function fun1(id){
        navigate(`/profile/${id}`)
    }

  return (
    <div>
        {
            list.map((data,id)=>{
                return(<div>
                    <h1 key={id}>{data}</h1>
                    <button className='bg-zinc-300 rounded-sm border border-black w-24' onClick={()=>fun1(id)}>Show</button>
                </div>)
            })
        }
    </div>
  )
}

export default UserList