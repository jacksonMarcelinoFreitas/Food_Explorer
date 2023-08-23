import { Container } from './style';
import { Button } from '../../components/Button';
import { Stepper } from '../../components/Stepper';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';


export function Card({icon: Icon, image, name, price, isAdmin, ...rest}){
  // let countOrder = 1;
  return(
    <Container {...rest}>
      {
        Icon&&
        Icon ?
        <AiFillHeart className="dish-like" size={24}/> :
        <AiOutlineHeart className="dish-like" size={24}/>
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