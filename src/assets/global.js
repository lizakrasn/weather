import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import reset from './reset';

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

   /* width */
   ::-webkit-scrollbar {
    /* width: 3px; */
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
`;

export default GlobalStyle;
