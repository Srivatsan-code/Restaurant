import React from 'react'
import logo from './logo.svg';
import About from './About';
import {Link,Route,Routes}  from 'react-router-dom';
import HomePage from './HomePage';
const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
    <img className='logo' src={logo} alt="logo" />
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>Menu</li>
      <li>Reservations</li>
      <li>Order Online</li>
      <li>Login</li>
    </ul>
    </nav>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='about' element={<About/>} />
            
    </Routes>
    </div>
  )
}

export default Navbar
