import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
     <>
     <div>
      <div className='SigninPagelayout'>
       <p>Sign In</p>
       <div>       <lable>
        <p style={{margin:"0",padding:"0"}}>Email Address</p>
        <input className='inputPage' type="email" name="" id="" />
       </lable>
      </div>
      <div>
      <lable>
        <p style={{margin:"0",padding:"0",textAlign:"start"}} >Password</p>
       <input className='inputPage' type="password" name="" id="" />
       </lable>
      </div>
      <div>
        <button>Login with Text Credentials</button>
      </div>
      <div>
        <Link to="/signup" >Create New Account</Link>
      </div>
      </div>

     </div>
     
     </>
  ) 
}

export default LoginPage
