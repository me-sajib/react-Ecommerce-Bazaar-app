import React from 'react';
import './SignUp.css'

const LogIn = () => {
    return (
        <div className='container'>
        <div className='signUp-container'>
        <h1 className='text'>Welcome Back ! Please LogIn</h1>
        <form className='form-container'>
          <input className='input-field email-field' type="email" placeholder='Your Email' required id="" /><br/>
          <input className='input-field pass-field' type="password" placeholder='Password' required id="" /><br/>
          <button className='btn' type="submit">Log In</button>
          <a className='forget-pass' href="#">Forget Password ?</a>
        </form>
      </div>
      </div>
    );
};

export default LogIn;