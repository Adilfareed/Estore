import React from 'react'
import './css/Loginsignup.css'
const Loginsignup = () => {
  return (
    <div className='signup-main'>
       <div className='signup'> 
       <h2> Sign Up</h2>
      <input type='text' placeholder='Your Name'></input>
      <input type='email' placeholder='Your Email'></input>
      <input type='password' placeholder='Your Password'></input>
      <button className='continue-btn'>Continue</button>
      </div>
      <div className='Login'>
      <p>Already Have an Account ?<span>Login</span> Here</p>
   
      </div>

    </div>
  )
}

export default Loginsignup