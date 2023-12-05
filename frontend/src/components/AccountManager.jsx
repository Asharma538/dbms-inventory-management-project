import React from 'react'
import Nav from './Nav';

export default function AccountManager({doLogoutAM}) {
  const doLogout = () => {
		doLogoutAM();
    }
  return (
    <div>
      <Nav doLogout={doLogout}/>
      AccountManager
    </div>
  )
}