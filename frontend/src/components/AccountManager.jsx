import React from 'react'

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