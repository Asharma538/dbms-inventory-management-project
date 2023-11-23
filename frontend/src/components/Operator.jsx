import React from 'react'
import Nav from './Nav';

export default function Operator({doLogoutOperator}) {
  const doLogout = () => {
		doLogoutOperator();
    }
  return (
    <div>
      <Nav doLogout={doLogout}/>
      Operator
    </div>
  )
}