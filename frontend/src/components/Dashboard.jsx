import React from 'react'
import Nav from './Nav';

export default function Dashboard({onLogin}) {
    const doLogout = () => {
        onLogin(false);
    }
    return (
        <div>
            <Nav onLogin={doLogout}/>
            Dashboard
        </div>
    )
}
