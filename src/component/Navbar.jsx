import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='container'>
    <div className='logo'>
      <h1>MyPorto.</h1>
    </div>
    <ul className='menu'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/'>Projects</Link></li>
      <li><Link to='/'>Contact</Link></li>
      
    </ul>
   </nav>
  )
}

export default Navbar