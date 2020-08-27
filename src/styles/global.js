import styled, { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 250ms all;
  }
  *,input,button,textarea{
    font-family: Roboto, sans-serif;
  }
  h1,h2,h3,h4,h5,h6{
    font-family: Archivo, sans-serif;
  }
  pre,code{
    font-family: 'Fira Code', Consolas, monospace;
  }
  body{
    height: 100%;
    width: 100%;
  }
`;
export default GlobalStyles;

