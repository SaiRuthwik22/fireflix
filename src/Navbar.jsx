import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import "./nav.css"


function Navbar() {
  return (
    <div className='navbar'>
        <ul>
            <li><NavLink to= "/">Trending</NavLink></li>
            <li><NavLink to="/Search" >Search</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar