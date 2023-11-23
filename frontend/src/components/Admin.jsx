import React from 'react'

export default function Admin({doLogoutAdmin}) {
  const doLogout = () => {
		doLogoutAdmin();
  }
  return (
    <div>
      <Nav onLogin={doLogout}/>
      Admin
    </div>
  )
}