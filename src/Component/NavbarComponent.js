import React from 'react'
import { Link } from 'react-router-dom'
import './effect.css'
function NavbarComponent() {
  return (
    <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto ">
      <li className="nav-item active box">
        <a className="nav-link" href="#"><Link to= "/">Home</Link></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#"><Link to= "/about">About</Link></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#"><Link to= "/product">Product</Link></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#"><Link to= "/contact">Contact</Link></a>
      </li>
     
    </ul>
    
  </div>
</nav>
    </div>
  )
}

export default NavbarComponent