import React, { useContext } from 'react'
import { PRODUCTS ,inr,GRADIENT} from './dummydata'
import { Navigate, useNavigate } from 'react-router-dom'
import { storeContext } from './Context'

const Shop = () => {

  let navigate =useNavigate()

  function fun1(id){
    navigate(`/product/${id}`)
  }

  let { dispatch } = useContext(storeContext)

  return (
    <div className='h-full w-full flex flex-col justify-center items-center gap-8 mt-10'>

        <div className='flex flex-col w-9/10 items-center  bg-gradient-to-r from-emerald-600 to-teal-700 text-white gap-2 rounded-3xl'>
          <h1 className='text-xl flex justify-start w-full mt-4 ml-8 text-emerald-100'>Fresh Drops . Free shippinggg✨</h1>
          <h1 className='text-2xl flex justify-start w-full ml-8 font-bold'>Everything You Need, all in one place📦</h1>
          <h1 className='text-md flex justify-start w-full mb-4 ml-8 text-emerald-100'>Electronics, Fashion and much more - at the best prices</h1>
        </div>

        <div className='w-9/10 flex gap-4'>
          <input className='border border-gray-300 w-4/5 h-[40px] rounded-lg' placeholder='  Search Products...'></input>

          <select className='border border-gray-300 w-1/5 h-[40px] rounded-lg  text-zinc-700 text-center text-xl'>
            <option>Sort:Featured</option>
            <option>Price Low to High</option>
            <option>Price High to low</option>
            <option>Top Rated</option>
          </select>
        </div>

        <div className='w-9/10 flex gap-2'>
          <button className='border border-gray-300 w-[50px] h-[30px] rounded-3xl text-zinc-700'>All</button>
          <button className='border border-gray-300 w-[100px] h-[30px] rounded-3xl text-zinc-700'>Electronics</button>
          <button className='border border-gray-300 w-[100px] h-[30px] rounded-3xl text-zinc-700'>Accessories</button>
          <button className='border border-gray-300 w-[100px] h-[30px] rounded-3xl text-zinc-700'>Footware</button>
          <button className='border border-gray-300 w-[50px] h-[30px] rounded-3xl text-zinc-700'>Men</button>
          <button className='border border-gray-300 w-[80px] h-[30px] rounded-3xl text-zinc-700'>Women</button>
          <button className='border border-gray-300 w-[60px] h-[30px] rounded-3xl text-zinc-700'>Home</button>
        </div>

        <div id='parent' className='grid grid-cols-2 grid-flow-row gap-4 w-9/10'>
            {
                PRODUCTS.map((a)=>{
                    return(
                    <div id='child' className='w-[550px] h-[400px] border border-gray-300 rounded-3xl flex flex-col items-center gap-6' onClick={()=>fun1(a.id)}>
                      
                        <div className={`bg-gradient-to-r ${GRADIENT[a.category]} w-full h-1/2 rounded-t-3xl`}>
                          <h1 className='text-8xl h-full flex flex-col justify-center items-center'>{a.emoji}</h1>
                          </div>
                        <div id='details' className='w-[95%]'>
                          <h1 className='text-gray-400 font-semibold'>{a.category}</h1>
                          <h1 className='font-semibold'>{a.title}</h1>
                          <div className='flex justify-between'>
                            <span className='font-bold text-xl'>{inr(a.price)}</span>
                            <span className='text-yellow-500 font-bold'>⭐{a.rating}</span>
                          </div>
                        </div>
                        <button className='w-9/10 h-[40px] rounded-xl bg-emerald-600 text-white font-semibold' onClick={(e) => { e.stopPropagation() 
                          dispatch({type: "ADD",payload: a.id})}}>+ Add to cart</button>
                    </div>)
                })
            }
        </div>
    </div>
  )
}

export default Shop