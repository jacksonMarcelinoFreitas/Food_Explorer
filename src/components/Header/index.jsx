import iconOrder from '../../assets/iconOrder.svg';
import { Brand } from '../../components/Brand';
import { Order } from '../../components/Order';
import { HiMiniBars3 } from 'react-icons/hi2';
import { Container } from './style';

export function Header({isAdmin, valueOrder, ...rest}){
  const icon = iconOrder;

  return(
    <Container {...rest}>

      <div className='iconMenu'>
        <HiMiniBars3 size={24}/>
      </div>

      <div className='brand'>
        <Brand className='logo'/>
        {/* renderizacao condicional */}
        {isAdmin&&
          <span>admin</span>
        }
      </div>

      {!isAdmin&&
        <div className='iconOrder'>
          <img src={ icon }/>
          <Order valueOrder={valueOrder}/>
        </div>
      }

    </Container>
  )
}
