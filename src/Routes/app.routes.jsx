import { Routes, Route } from 'react-router-dom';

import { NewDish } from '../pages/NewDish';
import { EditDish } from '../pages/EditDish';
import { ViewDish } from '../pages/ViewDish';
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/menu" element={ <Menu/> } />
      <Route path="/viewDish" element={ <ViewDish/> } />
      <Route path="/newDish" element={ <NewDish/> } />
      <Route path="/editDish" element={ <EditDish/> } />
    </Routes>
  )
}