import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import reset from './reset';
import { defaultTheme } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    vertical-align: baseline;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
    border: none;
    padding: 0;
    margin: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* scroll-behavior: smooth; */
  }
  body {
    color: ${theme.colors.black};
    /* scroll-behavior: smooth; */
    /* overflow: hidden; */
    font-family: ${theme.fontFamily.primary};
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fontFamily.secondary};
  }

  ul, ol {
    padding-left: 20px;

    > *:first-of-type {
      margin-top: 15px;
    }
  }

  ::selection {
    color: ${theme.colors.white};
    background-color: ${theme.colors.lime};
  }

   /* width */
   ::-webkit-scrollbar {
    /* width: 3px; */
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* background-color: ${theme.colors.purple_light_1};
    border-radius: 5px; */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    /* background: ${theme.colors.purple};
    transition: background 400ms ease;
    border-radius: 5px;
    cursor: pointer; */
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    /* background: ${theme.colors.primary}; */
  }

  input {
    border-radius: 0px;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  ${defaultTheme};
`;

export default GlobalStyle;
