import { IoSearchOutline } from 'react-icons/io5';
import { Button } from '../../components/Button';
import { PiReceiptLight } from 'react-icons/pi';
import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { Order } from '../../components/Order';
import { HiMiniBars3 } from 'react-icons/hi2';
import { LuLogOut } from 'react-icons/lu';
import { Container } from './style';

export function Header({isAdmin, valueOrder, ...rest}){
  const navigate = useNavigate();

  const navigateFor = () => {
    isAdmin? navigate('/newDish') : navigate('/orders');
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
          <Brand className='logo'/>
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
        title={isAdmin ? 'Novo prato' : `Pedidos (${valueOrder})`}
        onClick={navigateFor}
      />

      <LuLogOut size={32} className='iconLogout desktop'/>

      {!isAdmin&&
        <div className='iconOrder mobile'>
          <PiReceiptLight size={32}/>
          <Order valueOrder={valueOrder}/>
        </div>
      }

    </Container>
  )
}
