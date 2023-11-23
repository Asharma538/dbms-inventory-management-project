import React from 'react'

export default function Nav({doLogout}) {
  const doLogoutNav = () => {
    doLogout();
  }
  return (
    <div className='nav'>
        <button className='left'>Home</button>
        <button className='right' onClick={doLogoutNav}>Log Out</button>
    </div>
  )
}