import { Container } from './style';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Stepper } from '../../components/Stepper';

export function Card({icon: Icon, image, name, price, isAdmin, ...rest}){
  // let countOrder = 1;
  return(
    <Container {...rest}>
      {
        Icon&&
        <Icon className="dish-like" size={24}/>
      }

      <div className='image-dish'>
        <img src={image} alt="Dish"></img>
      </div>

      <p className='dish-name'>{name} &#62;</p>

      <span className='dish-price'>{price}</span>


      { !isAdmin&&
        <div className="dish-select-box">
          <Stepper className="dish_stepper"/>
          <Button className="dish-insert" title="Adicionar"/>
        </div>
      }

    </Container>
  )
}