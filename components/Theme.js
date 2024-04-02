import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Fonts from '@components/theme/Utils/Fonts';

export const Theme = ({ children }) => (
  <ThemeProvider theme={themeValues}>
    <Fonts />
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export const themeValues = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    grey: '#ABABAB',
    darkGrey: '#7A7A7A',
    primary: '#23422b',
    background: '#FFF1E4',
  },
  transitions: {
    all: 'all 0.1s ease-in-out',
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    font-size: 16px;
    font-family: 'Satoshi', sans-serif;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    color: ${(props) => props.theme.colors.primary};
  }

  p {
    font-size: 16px;
    color: ${(props) => props.theme.colors.darkGrey};
  }

  .boxed-width {
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    padding: 0 40px;
  }
`;

export default Theme;
