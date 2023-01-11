import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {Cart} from '../Context';
import {BsFillCartFill} from 'react-icons/bs'

function Navbar() {
  const {cart} = useContext(Cart)
  return (
    <div className='nav-container'>
        <div><Link to='/' style={{ textDecoration: 'none' }}><span className='icon'>sBags</span></Link></div>
        <div><Link to='cart'><span className='cart'><BsFillCartFill fontSize="25px" />
          <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill" style={{backgroundColor:"#473C33"}}>
           {cart.length} 
            <span className="visually-hidden">unread messages</span>
          </span></span></Link></div>
    </div>
  )
}

export default Navbar
