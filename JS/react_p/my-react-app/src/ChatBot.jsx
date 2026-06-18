import React, { useState } from 'react'
import {GoogleGenerativeAI} from '@google/generative-ai'
const ChatBot = () => {
    let [searchData,SetSearchData] =useState('')
    let[Data,SetData]=useState('')
    let genAi=new GoogleGenerativeAI("key") //AIzaSyDxj3E07f4rJ4y94xAUVvfe0vb6TY_1rKw
    async function search(){
        try{
            let model=genAi.getGenerativeModel({
                model:"gemini-2.5-flash"
            })
            let res= await model.generateContent(searchData)
            console.log(res.response.text());
            SetData(res.response.text());
        }
        catch(er){
            console.log(er)
        }
    }
  return (
    <div className='h-[500px] w-1/3 bg-grey-100 border rounded-xl mt-6 ml-[400px] shadow-[0_5px_15px_rgba(0,0,0,0.35)]'>
        <h1 className='text-2xl ml-4 mt-6'>Gemini Chat</h1>
        <h1 className='text-zinc-600 ml-4'>Powered by Google Gemini</h1>
        <div className='h-2/3 w-full ml-2 flex flex-col justify-center items-center text-wrap'>{Data}</div>
        <input className='border h-[40px] w-[250px] rounded-lg ml-4 text-center' placeholder='puchooo puchoo' onChange={(e)=>SetSearchData(e.target.value)}/>
        <button className='text-white bg-purple-600 h-[40px] w-[100px] rounded-lg ml-4' onClick={search}>Send</button>
    </div>
  )
}

export default ChatBot