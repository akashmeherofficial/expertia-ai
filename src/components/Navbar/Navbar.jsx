import React from 'react'
import './Navbar.css'
import Logo from '../../img/Logo.png'

const Navbar = () => {
  return (
    <div>      
    <nav className="navbar navbar-expand-lg " id='navbar'>
  <div className="container-fluid left-nav">
    <a href="/"><img className="navbar-brand" img src={Logo} alt="Expertia AI" /></a>
    </div>
  
    <div className="collapse navbar-collapse right-nav" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle active" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Solutions
          </a>
          <ul className="dropdown-menu nav-item" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Contact Us</a>
        </li>
        <button className="btn btn-outline-success nav-item" id='nav-btn' >Sign Up</button>
      </ul>
      
      
  </div>
</nav>

    </div>
  )
}

export default Navbar