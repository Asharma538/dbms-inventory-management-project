import React from 'react'
import Nav from '../Nav'

export default function StockDetails({doLogoutSM_S}) {

    const doLogout = () => {
        doLogoutSM_S();
    }
    return (
        <div>
            <Nav doLogout={doLogout}/>
            Stock Details
        </div>
    )
}
