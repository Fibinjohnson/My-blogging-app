import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
<h1>MyBlog</h1>
<div className='links'>
<Link to='/' >Home</Link>
<Link to='/create' style={{color:"white",backgroundColor:'#f1356d', borderRadius:"8px"}}>New blog</Link>
</div>   
 
    </div>
  )
}

export default Navbar
