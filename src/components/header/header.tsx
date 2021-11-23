import React, { useState } from "react";
import Restart from '../../icons/restart.svg';

import './header.scss';

export const Header = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <header className="header">
      <div className="header__logo">Forecast</div>

      <div className="header__content">
        <button className="header__restart">
          <img className="header__restart-icon" src={Restart} alt="restart icon"/>
        </button>

        <div className="header__search-container">
          <input
            className="header__search"
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(event) => {setInputValue(event.target.value)}}
          />
          {/* <button className="header__reset" type="button"></button> */}
          <span className="header__search-icon"></span>
        </div>
      </div>
    </header>
  )
}