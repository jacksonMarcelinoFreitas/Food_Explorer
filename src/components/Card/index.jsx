import { PiHeartStraightFill, PiPencilSimple } from 'react-icons/pi';
import { Stepper } from '../../components/Stepper';
import { Button } from '../../components/Button';
import { FiHeart } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { Container} from './style';


export function Card({ icon: Icon, image, name, price, isAdmin, description, id, ...rest }) {
  const navigate = useNavigate();
  return (
    <Container $isAdmin={isAdmin} {...rest}>
      {isAdmin ? (
        <>
          {/* <EditLink to="/teste"> */}
            <PiPencilSimple className="edit-icon" size={24} onClick={()=>{navigate(`/editDish/${id}`)}} />
          {/* </EditLink> */}

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
            <PiHeartStraightFill className="dish-like" size={22} onClick={()=>{navigate('/orderSum')}} />
          ) : (
            <FiHeart className="dish-like" size={22} onClick={()=>{navigate('/orderSum')}} />
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
