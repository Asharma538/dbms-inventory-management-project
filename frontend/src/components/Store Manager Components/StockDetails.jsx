import React from 'react'
import Nav from '../Nav'

export default function StockDetails({doLogoutSM_S,getToHome}) {

    const doLogout = () => {
        doLogoutSM_S();
    }
    const getBack = () => {
        getToHome();
    }
    
    return (
        <div>
            <Nav doLogout={doLogout} getToHome={getBack}/>
            Stock Details
        </div>
    )
}
