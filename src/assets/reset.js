import { css } from 'styled-components';

const reset = css`
  html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5,
  h6, p, blockquote, pre,a, abbr, acronym, address, big,
  cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small,
  strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt,
  dd, ol, ul, li,fieldset, form, label, legend,table, caption,
  tbody, tfoot, thead, tr, th, td,article, aside, canvas, details,
  embed, figure, figcaption, footer, header, hgroup, menu, nav,
  output, ruby, section, summary,time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  img,fieldset, a img{
    border: none;
  }
  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    -webkit-appearance: none;
  }

  button {
    cursor: pointer;
  }

  textarea {
    overflow: auto;
  }

  input, button {
    margin: 0;
    padding: 0;
    border: 0;
  }

  div, input, textarea, select,button,
  h1,h2,h3,h4,h5,h6,a,span,a:focus {
    outline: none;
  }

  ul,ol {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default reset;
