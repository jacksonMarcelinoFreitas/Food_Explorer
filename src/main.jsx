import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Menu } from './pages/Menu';
import { Dish } from './pages/Dish';
import { AdminDish } from './pages/AdminDish';
import { AdminHome } from './pages/AdminHome';
import { AdminMenu } from './pages/AdminMenu';
import { MobileContainer } from './components/MobileContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <MobileContainer>
        {/* <Dish/> */}
        {/* <Home/> */}
        <Menu/>
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <AdminDish /> */}
        {/* <AdminHome /> */}
        {/* <AdminMenu /> */}
      </MobileContainer>
    </ThemeProvider>
  </React.StrictMode>,
)
