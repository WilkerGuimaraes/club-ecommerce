import { createGlobalStyle } from 'styled-components';
import { Colors } from './theme/theme.colors';

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

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${Colors.input.background};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${Colors.text.dark};
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${Colors.overflowHover};
    }
  }
`;
