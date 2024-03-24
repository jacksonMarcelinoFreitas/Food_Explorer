import { Container } from './style';
import { FiMinus, FiPlus } from 'react-icons/fi';

export function Stepper({countOrder, setCountOrder, ...rest }) {

  const increment = () => setCountOrder(++countOrder);
  const decrement = () => {
    if (countOrder > 0) {
      setCountOrder(--countOrder);
    }else{
      alert('Faz isso não ... 🫤🤦‍♂️')
    }
  };

  const formatCount = (count) => {
    return count < 10 ? `0${count}` : count;
  };

  return(
    <Container>
        <FiMinus 
          size={24} 
          onClick={decrement}
        />
        <span>{formatCount(countOrder)}</span>
        <FiPlus 
          size={24} 
          onClick={increment}
        />
    </Container>
  )
}