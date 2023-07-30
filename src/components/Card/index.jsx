import { Container } from './style';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { Button } from '../../components/Button';

export function Card({icon: Icon, image, name, price,  ...rest}){
  let countOrder = 1;
  return(
    <Container>
      {
        Icon&&
        <Icon className="dish-like" size={24}/>
      }

      <div className='image-dish'>
        <img src={image} alt="Dish"></img>
      </div>

      <p className='dish-name'>{name} &#62;</p>

      <span className='dish-price'>{price}</span>

      <div className="dish-select">
        <div className='dish-unit'>
          <FiMinus size={24}/>
            <span>{countOrder}</span>
          <FiPlus size={24}/>
        </div>
        <Button title="Adicionar"/>
      </div>

    </Container>
  )
}