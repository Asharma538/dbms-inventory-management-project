import { useState,useEffect } from 'react'
import './App.css'
import Nav from './components/Nav';
import Login from './components/Login';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    /* For getting data */
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);
  var logged_in = false;

  return (
    <body>
      <Login/>
      {/* {data ? <pre>{JSON.stringify(data)}</pre>:"Loading.." } */}
    </body>
  );
}

export default App;