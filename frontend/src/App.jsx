import { useState,useEffect } from 'react'
import './App.css'
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  const [user,setUser] = useState('');

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  }

  const handleUser = (role) => {
    setUser(role);
  }

  return (
    <main>
      {
        isLoggedIn?
        <Dashboard onLogin={handleLogin} user={user}/> 
        : 
        <Login onLogin={handleLogin} defineUser={handleUser}/>
      }
    </main>
  );
}

export default App;