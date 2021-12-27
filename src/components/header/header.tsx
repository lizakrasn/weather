import React, { useState } from "react";
import { Icon } from "../ui/Icon";
import { 
  HeaderStyled,
  HeaderContent,
  Restart,
  SearchContainer,
  Input,
  SearchIconContainer,
  Logo
 } from './styles'

export const Header = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <HeaderStyled className="header">
      <Logo className="header__logo">Forecast</Logo>

      <HeaderContent>
        <Restart>
          <Icon type="restart"/>
        </Restart>

        <SearchContainer>
          <Input
            className="header__search"
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(event) => {setInputValue(event.target.value)}}
          />
          <SearchIconContainer>
            <Icon type="search"/>
          </SearchIconContainer>
        </SearchContainer>
      </HeaderContent>
    </HeaderStyled>
  )
}