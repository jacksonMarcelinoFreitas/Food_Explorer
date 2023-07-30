import { Container } from './style';
import { Brand } from '../../components/Brand';
import { Order } from '../../components/Order';
import { HiMiniBars3 } from 'react-icons/hi2';
import iconOrder from '../../assets/iconOrder.svg';

export function Header(){
  const icon = iconOrder;

  return(
    <Container>

      <div className='iconMenu'>
        <HiMiniBars3 size={24}/>
      </div>

      <Brand className='logo'/>

      <div className='iconOrder'>
        <img src={ icon }/>
        <Order/>
      </div>

    </Container>
  )
}
