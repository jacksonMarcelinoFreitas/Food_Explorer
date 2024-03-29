import { PiHeartStraightFill, PiPencilSimple } from 'react-icons/pi';
import { useUpdateOrder } from '../../hooks/orders';
import { Stepper } from '../../components/Stepper';
import { Button } from '../../components/Button';
import { useNavigate } from "react-router-dom";
import { FiHeart } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { Container} from './style';
import { useState } from 'react';

export function Card({ icon: Icon, image, name, price, isAdmin, description, isLiked, orders, id, ...rest }) {

  const [countOrder, setCountOrder] = useState(orders);
  const [like, setLike] = useState(isLiked);
  const {updateOrders} = useUpdateOrder();

  async function handleChangeOrderAndLike(origin){
    try {

      if(origin == 0){
        updateOrders({ amountOrder: countOrder, dish_id: id })
        toast.success(`Pedido atualizado!`);
      } else{
        updateOrders({ isLiked: !like, dish_id: id })
        setLike(!like); 
        !like ? toast.success(`❤️`) : toast.success(`👎`);
      }
  
    } catch (error) {
      toast.error(`${error}`)
    }
       
  }

  const navigate = useNavigate();
  return (
    <Container $isAdmin={isAdmin} {...rest}>
      {isAdmin ? (
        <>
          <PiPencilSimple className="edit-icon" size={24} onClick={()=>{navigate(`/viewDish/${id}`)}}/>

          <div className='image-dish'>
            <img src={image} alt="Dish" />
          </div>

          <p className='dish-name'>{name} &#62;</p>

          <span className='dish-description hidden'>{description}</span>
          <span className='dish-price'>{price}</span>
        </>
      ) : (
        <>
          {like ? (
            <PiHeartStraightFill 
              className="dish-like" 
              size={22} 
              onClick={() => {handleChangeOrderAndLike(1)}}
            />
          ) : (
            <FiHeart 
              className="dish-like" 
              size={22} 
              onClick={() => {handleChangeOrderAndLike(1)}} 
            />
          )}

          <div className='image-dish'>
            <img src={image} alt="Dish" onClick={()=>{navigate(`/viewDish/${id}`)}}/>
          </div>

          <p className='dish-name'>{name} &#62;</p>

          <span className='dish-description hidden'>{description}</span>
          <span className='dish-price'>{price}</span>

          {!isAdmin && (
            <div className="dish-select-box">
              <Stepper className="dish_stepper" countOrder={countOrder} setCountOrder={setCountOrder} />
              <Button className="dish-insert" title="Incluir" onClick={() => {handleChangeOrderAndLike(0)}} />
            </div>
          )}
        </>
      )}
    </Container>
  );
}
