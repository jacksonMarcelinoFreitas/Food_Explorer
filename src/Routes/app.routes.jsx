import { Routes, Route } from 'react-router-dom';

import { AdminDish } from '../pages/AdminDish';
import { AdminHome } from '../pages/AdminHome';
import { AdminMenu } from '../pages/AdminMenu';
import { AdminNewDish } from '../pages/AdminNewDish';
import { AdminEditDish } from '../pages/AdminEditDish';
import { ViewDish } from '../pages/ViewDish';
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/admin-home" element={ <AdminHome/> } />
      <Route path="/home/admin-menu" element={ <AdminMenu/> } />
      <Route path="/admin-home/admin-menu/admin-dish" element={ <AdminDish/> } />
      <Route path="/admin-home/admin-dishes/admin-new-dish" element={ <AdminNewDish/> } />
      <Route path="/admin-home/admin-dishes/admin-edit-dish" element={ <AdminEditDish/> } />
      {/* <Route path="/view-dish" element={ <ViewDish/> } /> */}
      <Route path="/home/view-dish" element={ <ViewDish/> } />
      <Route path="/home/menu" element={ <Menu/> } />
      <Route path="/home" element={ <Home/> } />
      <Route path="/login" element={ <SignIn/> } />
      <Route path="/register" element={ <SignUp/> } />
    </Routes>
  )
}