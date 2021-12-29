import React, {Fragment, useEffect, useState} from 'react';
import GlobalStyle from './assets/global';
import { Current } from './components/current/current';
import { Header } from './components/header/header';
import {
  AppStyled,
  AppContainer
} from './styles'

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
      <AppStyled>
        <AppContainer>
          <Header />
          {
            data
              ? <div className="main">
                  <Current currentData={data}/>
                </div>
              : <p>Loading</p>
          }
        </AppContainer>
      </AppStyled>
    </Fragment>
  );
}

export default App;
