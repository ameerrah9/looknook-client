import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../login/Login';
import Signup from '../signup/Signup';
import Home from '../home/Home';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  );
};

export default Routing;
