import { useUpdateOrder } from '../../hooks/orders';
import { IoSearchOutline } from 'react-icons/io5';
import { Button } from '../../components/Button';
import { PiReceiptLight } from 'react-icons/pi';
import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { Order } from '../../components/Order';
import { HiMiniBars3 } from 'react-icons/hi2';
// import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/auth';
import { LuLogOut } from 'react-icons/lu';
// import { api } from '../../services/api';
import { Container } from './style';


export function Header({isAdmin, ...rest}){
  const { totalAmountOrders } = useUpdateOrder();
  const { signOut } = useAuth();
  
  const navigate = useNavigate();

  const navigateFor = () => {
    isAdmin ? navigate('/newDish') : navigate('/order');
  }

  const logout = () => {

    if (window.confirm("Você deseja realmente sair?")) {
      signOut();
    }
  }

  return(
    <Container {...rest}>

      <div className='iconMenu mobile'>
        <HiMiniBars3
          size={24}
          onClick={() => {navigate("/menu")}}
        />
      </div>

      <div className="box-search-brand">

        <div className='brand'>
          <Brand className='logo' />
          {isAdmin&&
            <span>admin</span>
          }
        </div>

        <Input
          icon={IoSearchOutline}
          className='input-search desktop'
          placeholder='Busque por pratos ou ingredientes'
        />

      </div>

      <Button
        className='orderButton desktop'
        icon={isAdmin ? null : PiReceiptLight}
        title={isAdmin ? 'Novo prato' : `Pedidos (${totalAmountOrders})`}
        onClick={navigateFor}
      />

      <LuLogOut 
        size={32} 
        className='iconLogout desktop' 
        onClick={logout}
      />

      {!isAdmin&&
        <div 
          className='iconOrder mobile' 
          onClick={navigateFor}>
          <PiReceiptLight size={32}/>
          <Order valueOrder={totalAmountOrders}/>
        </div>
      }

    </Container>
  )
}
