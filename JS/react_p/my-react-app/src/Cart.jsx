import React from 'react'
const Cart = ({cart}) => {
  return (
    <div id='parent'>
        {
            cart.map((a)=>{
                return(<div id='child'>
                    <img   src={a.thumbnail}/>
                    <h4>{a.title}</h4>
                    <h6>{a.price}</h6>
                </div>)
            })
        }
    </div>
  )
}

export default Cart