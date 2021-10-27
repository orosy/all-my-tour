import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Routes from './Routes';

ReactDOM.render(
  <ThemeProvider theme={{ theme }}>
    <GlobalStyles />
    <Routes />
  </ThemeProvider>,
  document.getElementById('root')
);
