import { Routes, Route } from 'react-router-dom';

import { PageNotFound } from '../pages/PageNotFound'; 
import { ViewDish } from '../pages/ViewDish';
import { EditDish } from '../pages/EditDish';
import { NewDish } from '../pages/NewDish';
import { Order } from '../pages/Order';
import { Home } from '../pages/Home';
import { Menu } from '../pages/Menu';

export function AppRoutes(){
  return(
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/menu" element={ <Menu/> } />
      <Route path="/order" element={ <Order/> } />
      <Route path="/newDish" element={ <NewDish/> } />
      <Route path="/viewDish/:id" element={ <ViewDish/> } />
      <Route path="/editDish/:id" element={ <EditDish/> } />
      <Route path="*" element={ <PageNotFound/> } />
    </Routes>
  )
}