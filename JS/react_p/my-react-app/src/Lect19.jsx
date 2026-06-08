import React from 'react'
import Cart from './Cart'
import Form from './Form'
import { Link } from 'react-router-dom'
const Lect19 = () => {
  return (
    <div id='nav'>
        <Link to={'/'}>   
            <li>Home</li>
        </Link>
        <Link to={'/Form'}>
            <li>Login</li>
        </Link>
        <Link to={'/Cart'}>
        <li>Cart</li>
        </Link>
    </div>
  )
}

export default Lect19