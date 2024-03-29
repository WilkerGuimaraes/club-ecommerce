import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  html,
  body {
    height: 100%;
  }
`;
