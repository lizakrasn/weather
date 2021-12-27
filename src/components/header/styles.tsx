import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(88, 98, 107, 0.6);
  color: white;
`

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 40px;
  align-items: center;
`

export const Logo = styled.div`
  font-size: 20px;
`

export const Restart = styled.button`
  display: flex;
  cursor: pointer;
  background-color: inherit;
  border: none;
`

export const SearchContainer = styled.div`
  position: relative;
`

export const Input = styled.input`
  width: 250px;
  height: 25px;
  padding: 5px 30px 5px 5px;
  border: none;
  border-radius: 3px;
  color: black;
  font-size: 16px;

  &::placeholder {
    color: black;
  }

  &:focus{
    outline: none;
  }
`

export const SearchIconContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 7px;
`