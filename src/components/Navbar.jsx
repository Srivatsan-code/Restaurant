import React from 'react'
import logo from './logo.svg';
import About from './About';
import {Link,Route,Routes}  from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
    <img className='logo' src={logo} alt="logo" />
    <ul>
      <li>
        <Link className='Link' to='/'>Home</Link>
      </li>
      <li>
        <Link className='Link' to="/about">About</Link>
      </li>
      <li>
      <Link className='Link' to="/menu">Menu</Link>
      </li>
      <li>
        <Link className='Link' to="/reservation">Reservation</Link>
      </li>
      <li>
      <Link className='Link' to="/onlineorder">Online Order</Link>
      </li>
      <li>
      <Link className='Link' to="/Login">Login</Link>
      </li>
    </ul>
    </nav>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='about' element={<About/>} />
        <Route path='reservation' element={<BookingPage/>}/>
        <Route path='confirmation/:date/:time/' element={<ConfirmedBooking />}/>
    </Routes>
    </div>
  )
}

export default Navbar
