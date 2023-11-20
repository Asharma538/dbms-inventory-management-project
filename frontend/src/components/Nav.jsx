import React from 'react'

export default function Nav({onLogin}) {
  const doLogout = () => {
    onLogin(false);
  }
  return (
    <div className='nav'>
        <button className='left'>Home</button>
        <button className='right' onClick={doLogout}>Log Out</button>
    </div>
  )
}