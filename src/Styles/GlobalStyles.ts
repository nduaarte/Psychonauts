import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--background);
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }
  
  li { 
    list-style: none; 
  }
  
  *, button, input {
    border: none;
    background: none;
    font-family: Roboto, sans-serif;
  }
  :root {
    --background: #F8F8F8;
    --primary: #3F3D56;
    --white: #ffffff;
    --darkWhite: #f9f9f9;
    --grey: #9E9494;
    --lightGrey: #C0C0C0;
  }
`;