import React, { useState } from 'react';

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    aboutMe: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
  };

  return (
    <form className='signup_form' onSubmit={handleSubmit}>
      <label htmlFor='First Name'>First Name</label>
      <input type='text' name='firstName' onChange={handleChange} />

      <label htmlFor='Last Name'>Last Name</label>
      <input type='text' name='lastName' onChange={handleChange} />

      <label htmlFor='Username'>Username</label>
      <input type='text' name='username' onChange={handleChange} />

      <label htmlFor='Email'>Email</label>
      <input type='email' name='email' onChange={handleChange} />

      <label htmlFor='Phone Number'>Phone Number</label>
      <input type='text' name='phoneNumber' onChange={handleChange} />

      <label htmlFor='About Me'>About Me</label>
      <input type='text' name='aboutMe' onChange={handleChange} />

      <label htmlFor='Password'>Password</label>
      <input type='password' name='password' onChange={handleChange} />

      <label htmlFor='Confirm Password'>Confirm Password</label>
      <input type='password' name='confirmPassword' onChange={handleChange} />

      {error && (
        <div className='error_container'>
          <p className='form_error'>{error}</p>
        </div>
      )}

      <button type='submit'>Signup</button>
    </form>
  );
};

export default Signup;
