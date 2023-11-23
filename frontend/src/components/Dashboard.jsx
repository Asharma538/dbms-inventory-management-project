import React from 'react'
import CallCenter from './CallCenter';
import Technician from './Technician';
import Operator from './Operator';
import Admin from './Admin';
import {Link} from 'react-router-dom'
import StoreManager from './StoreManager';
import AccountManager from './AccountManager';

export default function Dashboard({onLogin,user}) {
    const doLogout = () => {
        onLogin(false);
    }
    switch (user) {
        case "Admin":
            return (
                <div>
                    <Admin doLogoutAdmin={doLogout}/>
                </div>
            )
        case "StoreManager":
            return (
                <div>
                    <StoreManager doLogoutSM={doLogout}/>
                </div>
            )
        case "AccountManager":
            return (
                <div>
                    <AccountManager doLogoutAM={doLogout}/>
                </div>
            )
        case "Technician":
            return (
                <div>
                    <Technician doLogoutTechnician={doLogout}/>
                </div>
            )
        case "Operator":
            return (
                <div>
                    <Operator doLogoutOperator={doLogout}/>
                </div>
            )
        case "CallCenterEmp":
            return (
                <div>
                    <CallCenter doLogoutCC={doLogout}/>
                </div>
            )
        default:
            return (
                <div>
                    Error Code 404, page doesn't exists
                </div>
            )
    }
}
