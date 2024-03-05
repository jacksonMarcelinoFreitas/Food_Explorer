import { PiHeartStraightFill, PiPencilSimple } from 'react-icons/pi';
import { Stepper } from '../../components/Stepper';
import { Button } from '../../components/Button';
import { FiHeart } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { Container} from './style';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';


export function Card({ icon: Icon, image, name, price, isAdmin, description, isLiked, orders, id, ...rest }) {
  const [countOrder, setCountOrder] = useState(orders);
  const [like, setLike] = useState(isLiked);

  async function handleChangeOrderAndLike(origin){
    try {

      if(origin == 0){
        var response = await api.put(`/dish/commonDishesOrders/${id}`, {orders: countOrder});
        console.log('Novo count:', countOrder);
      } else{
        var response = await api.put(`/dish/commonDishesOrders/${id}`, {isLiked: !like});
        setLike(!like); 
        console.log('Novo estado de like:', !like);
      }

      console.log(response.data);
  
  
    } catch (error) {
  
      if(error.response){
        alert(error.response.data.error);
        console.log(error.response.data.error); 
      }

    }
       
  }


  const navigate = useNavigate();
  return (
    <Container $isAdmin={isAdmin} {...rest}>
      {isAdmin ? (
        <>
          {/* <EditLink to="/teste"> */}
            <PiPencilSimple className="edit-icon" size={24} onClick={()=>{navigate(`/viewDish/${id}`)}}/>
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
            <img src={image} alt="Dish" />
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
