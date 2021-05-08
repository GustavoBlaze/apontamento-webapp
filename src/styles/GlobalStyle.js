import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --text-color: #363636;
  }

  html,
  body,
  #__next {
    height: 100%;
    box-sizing: border-box;
  }

  body * {
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    color: var(--text-color);
  }
`;
