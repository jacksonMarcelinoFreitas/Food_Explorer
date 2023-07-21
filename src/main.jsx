import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { MobileContainer } from './components/MobileContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <MobileContainer>
          <SignIn/>
        </MobileContainer>
    </ThemeProvider>
  </React.StrictMode>,
)
