import React from 'react'
import { useState,useEffect } from 'react'

export default function Login({onLogin,defineUser}) {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [accountExists, setAccountExists] = useState(false);

  const doLogin = (role) => {
    defineUser(role);
    onLogin(true);
  } 

  const handleInputChange = (event) => {
    const { name,value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (accountExists){
      fetch('http://localhost:3000/login',{
        method : 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          'email': email,
          'password':password
        }),
      }).then(
        response => response.json()
      ).then(
        response => {
          console.log(response);
          if (response.Message=='Success'){
            doLogin(response.JobTitle);
          }
          else{
            alert(response.Message);
          }
        }
      );
    }
    else {
      fetch('http://localhost:3000/signin',{
        method : 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          'email': email,
          'password':password
        }),
      }).then(
        response => response.json()
      ).then(
        response => {
          if (response.Message=='Success'){
            changeAccountStatus();
          }
          else{
            alert(response.Message);
          }
        }
      );
    }
  }

  const changeAccountStatus = () => {
    setAccountExists(!accountExists);
  };
  
  return (
    <div>
        <div className='Main-header'>
            <center>
              <h1>Vending Machine Management System </h1>
            </center>
        </div>

        <center className='login-form-center'>
          <form className='login-form' onSubmit={handleSubmit}>
            <div>
              {
                accountExists? (<p className='Login'>Login</p>) : (<p className='Login'>Signin</p>)
              }
              {
                accountExists? 
                (<p className='login_text'>Log in to your account to continue</p>)
                : 
                (<p className='login_text'>Sign in to your account to continue</p>)
              }
              
            </div>
            
            <label>
              Email Address
              <input type="email" name='email' value={email} onChange={handleInputChange} placeholder='Email' required></input> <br></br>
            </label>

            <label>
              Password
              <input type="password" name='password' value={password} onChange={handleInputChange} placeholder='Password' required></input> <br></br>
            </label>

            <center>
              {
                accountExists?
                (<button type='submit' onClick={handleSubmit}>Login</button>)
                :
                (<button type='submit'onClick={handleSubmit}>Sign In</button>)
              }
              {
                accountExists?
                (<p className='login_qn_text' onClick={changeAccountStatus}><u>Don't have an account? Sign In</u></p>)
                :
                (<p className='login_qn_text' onClick={changeAccountStatus}><u>Already have an account? Login</u></p>)
              }
            </center>
          </form>
        </center>
    </div>
  )
}
