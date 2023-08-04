import { MobileContainer } from './components/MobileContainer';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

import ReactDOM from 'react-dom/client';
import React from 'react';

// import { AdminEditDish } from './pages/AdminEditDish';
import { AdminEditDish } from './pages/AdminEditDish';
import { AdminNewDish } from './pages/AdminNewDish';
import { AdminDish } from './pages/AdminDish';
import { AdminHome } from './pages/AdminHome';
import { AdminMenu } from './pages/AdminMenu';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Dish } from './pages/Dish';

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
        {/* <AdminNewDish /> */}
        {/* <AdminEditDish /> */}
      </MobileContainer>
    </ThemeProvider>
  </React.StrictMode>,
)
