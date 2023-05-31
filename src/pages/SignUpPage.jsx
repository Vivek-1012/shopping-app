import React from 'react'
import { Link } from 'react-router-dom'

const SignUpPage = () => {
  return (
    <>
    <div className='background' style={{backgroundColor:"red"}}>
    <div >
      <div className='signupPageLayout' >
        <p>Sign Up</p>
        <div style={{display:"flex"}}>
          <div >
            <label>
              <p style={{margin:"0",padding:"0"}}>First Name</p>
              <input className='inputPage' type="text" name="" id="" />
            </label>
          </div>
          <div>
            <label>
            <p style={{margin:"0",padding:"0"}}>Last Name</p>
            <input className='inputPage' type="text" name="" id="" />
            </label>
          </div>
        </div>
        <div>
          <label>
            <p style={{margin:"0",padding:"0"}}>Email Address</p>
            <input className='inputPage' type="email" name="" id="" />
          </label>
        </div>
        <div>
          <p style={{margin:"0",padding:"0"}}>Password</p>
          <input className='inputPage' type="password" name="" id="" />
        </div>
        <button  >Create New Account</button>
        <div>
          <Link to="/SignIn" >Already have a account</Link>
        </div>
      </div>
    </div>
    </div>
    
    
    </>
  )
}

export default SignUpPage
