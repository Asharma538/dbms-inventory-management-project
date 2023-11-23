import React from 'react'
import Nav from '../Nav'

export default function VendorDetails({doLogoutSM_V}) {
    
  const doLogout = () => {
    doLogoutSM_V();
  }
  return (
    <div>
        <Nav doLogout={doLogout}/>
        Vendor Details
    </div>
  )
}