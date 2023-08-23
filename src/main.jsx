import { MobileContainer } from './components/MobileContainer';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import ReactDOM from 'react-dom/client';
import React from 'react';
import { AuthProvider } from './hooks/auth';
import { Routes } from './Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <MobileContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </MobileContainer>
    </ThemeProvider>
  </React.StrictMode>,
)
