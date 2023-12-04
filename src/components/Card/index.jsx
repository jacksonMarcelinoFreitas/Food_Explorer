import { PiHeartStraightFill, PiPencilSimple } from 'react-icons/pi';
import { Stepper } from '../../components/Stepper';
import { Button } from '../../components/Button';
import { FiHeart } from 'react-icons/fi';
import { Container } from './style';


export function Card({ icon: Icon, image, name, price, isAdmin, description, ...rest }) {
  return (
    <Container $isAdmin={isAdmin} {...rest}>
      {isAdmin ? (
        <>
          <PiPencilSimple className="dish-like" size={24} />

          <div className='image-dish'>
            <img src={image} alt="Dish" />
          </div>

          <p className='dish-name'>{name} &#62;</p>

          <span className='dish-description hidden'>{description}</span>
          <span className='dish-price'>{price}</span>
        </>
      ) : (
        <>
          {Icon ? (
            <PiHeartStraightFill className="dish-like" size={22} />
          ) : (
            <FiHeart className="dish-like" size={22} />
          )}

          <div className='image-dish'>
            <img src={image} alt="Dish" />
          </div>

          <p className='dish-name'>{name} &#62;</p>

          <span className='dish-description hidden'>{description}</span>
          <span className='dish-price'>{price}</span>

          {!isAdmin && (
            <div className="dish-select-box">
              <Stepper className="dish_stepper" />
              <Button className="dish-insert" title="Incluir" />
            </div>
          )}
        </>
      )}
    </Container>
  );
}
