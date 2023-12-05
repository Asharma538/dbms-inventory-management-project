import React from 'react'

export default function Nav(props) {
  const doLogoutNav = () => {
    props.doLogout();
  }
  if (props.getToHome){
    return (
      <div className='nav'>
        <button className='left' onClick={()=>{props.getToHome();}}>Home</button>
        <button className='right' onClick={doLogoutNav}>Log Out</button>
      </div>
    )
  }
  else{
    return (
      <div className='nav'>
        <button className='left'>Home</button>
        <button className='right' onClick={doLogoutNav}>Log Out</button>
      </div>
    )
  }
}