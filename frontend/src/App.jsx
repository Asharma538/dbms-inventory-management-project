import { useState,useEffect } from 'react'
import './App.css'


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {

    /* For getting data */
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));

  }, []);

  return (
    <div>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default App;