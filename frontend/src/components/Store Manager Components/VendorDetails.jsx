import React from 'react'
import Nav from '../Nav'

export default function VendorDetails({doLogoutSM_V,getToHome}) {
    
  const doLogout = () => {
    doLogoutSM_V();
  }
  const getBack = () => {
    getToHome();
  }
  
  return (
    <div>
        <Nav doLogout={doLogout} getToHome={getBack}/>
        Vendor Details
    </div>
  )
}