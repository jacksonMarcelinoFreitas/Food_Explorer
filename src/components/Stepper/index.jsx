import { Container } from './style';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { useState } from 'react';

export function Stepper({countOrder, setCountOrder, ...rest }) {

  const increment = () => setCountOrder(countOrder + 1);
  const decrement = () => {
    if (countOrder > 0) {
      setCountOrder(countOrder - 1);
    }
  };

  const formatCount = (count) => {
    if (count === 0) {
      return "01";
    } else {
      return count < 10 ? `0${count}` : count;
    }
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