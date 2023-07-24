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
        <NavLink to='/collections'>My Collections</NavLink>
        <NavLink to='/profile'>Profile</NavLink>
        <NavLink to='/logout'>Logout</NavLink>
        <NavLink to='/looks'>My Looks</NavLink>
        <NavLink to='/pieces'>My Pieces</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
