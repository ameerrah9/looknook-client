import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Signup</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
    </>
  );
};

export default Navbar;