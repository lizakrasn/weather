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
    <HeaderStyled>
      <Logo>Forecast</Logo>

      <HeaderContent>
        <Restart>
          <Icon type="restart"/>
        </Restart>

        <SearchContainer>
          <Input
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