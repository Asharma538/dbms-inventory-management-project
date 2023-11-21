import React from 'react'
import Nav from './Nav';
import CallCenter from './CallCenter';

export default function Dashboard({onLogin,user}) {
    const doLogout = () => {
        onLogin(false);
    }

    
    return (
        <div>
            <Nav onLogin={doLogout}/>
            <CallCenter/>
        </div>
    )
}
