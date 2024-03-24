import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { OrderProvider } from './hooks/orders';
import { AuthProvider } from './hooks/auth';
import GlobalStyles from './styles/global';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme';
import { Routes } from './Routes';

import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <ToastContainer/>
        <AuthProvider>
          <OrderProvider>
            <Routes />
          </OrderProvider>
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
