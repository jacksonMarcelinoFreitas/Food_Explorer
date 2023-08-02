import { Container } from './style';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Button } from '../../components/Button';

export function Stepper({countOrder = 0, ...rest}){
  return(
    <Container>
        <FiMinus size={24}/>
          <span>{countOrder}</span>
        <FiPlus size={24}/>
    </Container>
  )
}