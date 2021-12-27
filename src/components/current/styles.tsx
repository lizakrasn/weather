import styled from 'styled-components';

export const StyledCurrent = styled.div``

export const CurrentContent = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const TemperatureBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Button = styled.button`
  padding: 2px 5px;
  font-size: 18px;
  background-color: transparent;
  border: none;
  color: rgb(88, 98, 107);
  cursor: pointer;
  border: 1px solid transparent;
  transition: border-color 500ms;

  &:hover {
    border-color: white;
  }

  &.active {
    color: black;
  }
`
export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
`

export const Description = styled.p`
  font-size: 22px;
`

export const City = styled.p`
  font-size: 30px;
`

export const Temperature = styled.p`
  font-size: 70px;
`

