import React, {useEffect, useState} from 'react';
import './App.scss';
import { Current } from './components/current/current';
import { Header } from './components/header/header';

function App() {
  const APIKEY = "b4c36e46349fa74357ded82c0d7998ab";
  const city = "Kyiv";
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`)
      .then(res => res.json())
      .then((result) => {
        setData(result)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      {
        data
          ? <div className="main">
              <Current currentData={data}/>
            </div>
          : <p>Loading</p>
      }
    </div>
  );
}

export default App;
