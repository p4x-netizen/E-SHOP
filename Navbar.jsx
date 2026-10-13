import React from 'react'
import logo_icon from '../assets/logo.png'
import './Navbar.css'
import login from './login.jsx';



const Navbar = () => {
  let isDark = false;
  const toggleDarkMode = () =>{
    isDark = !isDark;
    document.body.style.background = isDark ?
    "#333" : "#e0e5ec";
    document.body.style.color = isDark ?
    "#e0e5ec" : "#333";
  }

  return (
    <div>
      <nav className='container'>
        <div className="navbar">
        <div className="logo">
          <img    src={logo_icon} alt="" />
        </div>
        <div className="links">
            <ul>
                <li><a to="/"><i class="fa-solid fa-house"></i>Home</a></li>
                <li><a to="/"><i class="fa-solid fa-shop"></i>Shop</a></li>
                <li><a to="/"><i class="fa-solid fa-handshake"></i>Deals</a></li>
                <li><a to='/'><i class="fa-etch fa-solid fa-user"></i>Account</a></li>
            </ul>
        </div>
        <div className="icons">
          <i class="fa-solid fa-magnifying-glass" ></i>
          <i class="fa-regular fa-heart" ></i>
          <i class="fa-solid fa-cart-shopping" ></i>
          <button className='dark' onClick={toggleDarkMode}>Dark</button>
        </div>
         </div>
      </nav>
      <div className="search-container">
          <div className="input-field">
            <div className="search">
            <i class="fa-solid fa-magnifying-glass" ></i>
            <input type="search" name="" id="" placeholder='search for products,brands categories'/>
            </div>
            <button className='btn-search'>Search</button>
          </div>
        
        </div>
    </div>
  )
}

export default Navbar
