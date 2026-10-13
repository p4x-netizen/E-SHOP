import React from 'react'
import './loginc.css'

const login = () => {
  return (
    <div className='login'>
      <div className="login-box">
    <h2>Login</h2>
    <form>
        <div className="input-fied">
            <input type="text" name="" id="" placeholder="Username"/>
        </div>
        <div className="input-fied">
            <input type="password" name="" id="" placeholder="password"/> 
        </div>
        <button>Sign in</button>
         </form>
        <div className="extra-link">
            <p><a href="#">Forgot password?</a></p>
            <p>Dont have an account?<a href="#">Sign up</a></p>
        </div>
   
</div>
    </div>
  )
}

export default login
