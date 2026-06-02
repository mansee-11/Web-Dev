import React from 'react'
import College from './College'
import Form from './form'
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
        <Link to={'/College'}>
        <li>College</li>
        </Link>
    </div>
  )
}

export default Lect19