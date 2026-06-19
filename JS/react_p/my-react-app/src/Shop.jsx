import React from 'react'

const Shop = () => {
  return (
    <div className='h-full w-full flex flex-col justify-center items-center gap-8'>

        <nav className='flex justify-between w-9/10'>
            <h1 className='text-2xl'>Shop<span className='text-green-600'>Kart</span></h1>
            <h1 className='text-2xl'>Cart</h1>
        </nav>

        <div className='flex flex-col w-9/10 items-center  bg-gradient-to-r from-green-700 to-green-400 text-white gap-2 rounded-3xl'>
          <h1 className='text-xl flex justify-start w-full mt-4 ml-8'>Price Dropppp . Free shippinggg✨</h1>
          <h1 className='text-2xl flex justify-start w-full ml-8'>Everything You Need, all in one place📦</h1>
          <h1 className='text-md flex justify-start w-full mb-4 ml-8'>Electronics, Fashion and much more - at the best prices</h1>
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

        <div>

        </div>
    </div>
  )
}

export default Shop