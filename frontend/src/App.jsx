import { useState,useEffect } from 'react'
import './App.css'
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(true);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  }

  return (
    <body>
      {
        isLoggedIn?
        <Dashboard onLogin={handleLogin}/> 
        : 
        <Login onLogin={handleLogin}/>
      }
    </body>
  );
}

export default App;