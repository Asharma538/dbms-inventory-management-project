import React from 'react'

export default function Login() {
  return (
    <div>
        <div className='Main-header'>
            <center>
            <h1>Vending Machine Management System </h1>
            </center>
        </div>
        <center className='login-form-center'>
        <form className='login-form'>
            <div>
                <p className='Login'>Login</p>
                <p className='Sign-in'>Sign in to your account to continue</p>
            </div>
            <br></br>
            <label>Email Address</label><br></br>
            <input type = "email" placeholder='abc@gmail.com' required></input> <br></br>

            <label>Password</label><br></br>
            <input type = 'password' placeholder='password' required></input> <br></br>
            <br></br>
            <center>
            <button type='submit'>Sign In</button>

            </center>
        </form>
        </center>
    </div>
  )
}
