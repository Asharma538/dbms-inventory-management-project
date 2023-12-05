import React, { Children, useState } from 'react'
import VendorDetails from './Store Manager Components/VendorDetails';
import StockDetails from './Store Manager Components/StockDetails';
import Nav from './Nav';

export default function StoreManager({doLogoutSM}) {

  const [section,setSection] = useState("home");

  const showVendorDetials = () => {
    setSection("vendor");
  }
  const showStockDetials = () => {
    setSection("stock");
  }
  const showHome = () => {
    setSection("home");
  }

  const doLogout = () => {
    doLogoutSM();
  }

  switch (section) {
    case "vendor":
      return (
        <VendorDetails doLogoutSM_V={doLogout} getToHome={showHome}/>
      )
    case "stock":
      return (
        <StockDetails doLogoutSM_S={doLogout} getToHome={showHome}/>
      )
    default:
      return (
        <div>
          <Nav doLogout={doLogout}/>
          <button className="vendor-details-section-text dashboard-section-text" onClick={showVendorDetials}>
            Vendor Details
          </button>
          <button className="stock-details-section-text dashboard-section-text" onClick={showStockDetials}>
            Stock Details
          </button>
        </div>
      )
  }
}