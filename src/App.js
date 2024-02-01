import { useState } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';


const apiUrl = process.env.REACT_APP_BACKEND_HOST;
const appVersion = process.env.REACT_APP_APP_VERSION;

function App() {

  const [data,setData] = useState(null)

const handleClick = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `http://${apiUrl}:3001`,
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });

      setData(response.data.message)
  } catch (err) {
      console.log(err.message)
  }
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Your bunny version - {appVersion && <span>{appVersion}</span>}
        </div>
        <div>
          {data && <div>{data}</div>}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        <button type="submit" onClick={handleClick} >Test</button>
      </header>
    </div>
  );
}

export default App;
