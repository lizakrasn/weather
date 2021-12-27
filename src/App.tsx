import React, {Fragment, useEffect, useState} from 'react';
import './App.scss';
import GlobalStyle from './assets/global';
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
    <Fragment>
      <GlobalStyle />
      <div className="App">
        <div className="App-container">
          <Header />
          {
            data
              ? <div className="main">
                  <Current currentData={data}/>
                </div>
              : <p>Loading</p>
          }
        </div>
      </div>
    </Fragment>
  );
}

export default App;
