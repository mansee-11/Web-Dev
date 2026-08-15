// import React from 'react'
// const Cart = ({cart}) => {
//   return (
//     <div id='parent'>
//         {
//             cart.map((a)=>{
//                 return(<div id='child'>
//                     <img   src={a.thumbnail}/>
//                     <h4>{a.title}</h4>
//                     <h6>{a.price}</h6>
//                 </div>)
//             })
//         }
//     </div>
//   )
// }

// export default Cart

import React, { useContext } from 'react'
import { storeContext } from './Context'
import { GRADIENT,inr } from './dummydata'

const Cart = () => {

    let { store } = useContext(storeContext)

    let cartItems = store.products.filter((item) => {
        return item.quantity > 0
    })

    return (
      <div id='parent' className='flex flex-col gap-4 w-full items-center mt-10'>

        {
          cartItems.map((a) => {

            return (
              <div id='child'className='w-7/10 h-[150px] border border-gray-300 rounded-3xl flex items-center gap-6'>
                <div className={`ml-10 bg-gradient-to-r ${GRADIENT[a.category]} w-[130px] h-[130px] rounded-3xl`}>
                  <h1 className='text-4xl h-full w-full flex flex-col justify-center items-center'>
                    {a.emoji}
                  </h1>
                </div>
                <div id='details' className='flex flex-col w-3/5 gap-2'>
                    <h1 className='font-semibold'>{a.title}</h1>
                    <h1 className='font-bold text-2xl'>{inr(a.price)}</h1>
                  <div className='flex gap-2'>
                    <button className='border border-gray-300 w-[20px] rounded-sm'>+</button>
                    <h1> {a.quantity}</h1>
                    <button className='border border-gray-300 w-[20px] rounded-sm'>-</button>
                  </div>
              </div>
              <button className='font-bold text-3xl'>🗑️</button>

              </div>
            )
          })
       }

      </div>
    )
}

export default Cart