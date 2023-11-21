import React from 'react'
import Nav from './Nav';
import CallCenter from './CallCenter';
import Technician from './Technician';

export default function Dashboard({onLogin}) {
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
