import React, { useState } from 'react'
import Nav from './Nav';

export default function StoreManager({doLogoutSM}) {
  const [section,setSection] = useState("home");
  const handleSectionChange = (status) => {
    setSection(status);
  }
  const doLogout = () => {
    doLogoutSM();
  }

  switch (section) {
    case "vendor":
      return (
        <div>
          <Nav doLogout={doLogout}/>
          Vendor Details
        </div>
      )
    case "stock":
      return (
        <div>
          <Nav doLogout={doLogout}/>
          Stock Details
        </div>
      )
    default:
      return (
        <div>
          <Nav doLogout={doLogout}/>
          <div className="vendor-details-section-text dashboard-section-text">
            <button>Vendor Details</button>
          </div>
          <div className="stock-details-section-text dashboard-section-text">
            <button>Stock Details</button>
          </div>
        </div>
      )
  }
}