import { ButtonNavigation } from '../../components/ButtonNavigation';
import { Ingredients }  from '../../components/Ingredients';
import { useNavigate, useParams } from 'react-router-dom';
import { useUpdateOrder } from '../../hooks/orders';
import { Stepper } from "../../components/Stepper";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { LuChevronLeft } from "react-icons/lu";
import { useEffect, useState } from 'react';
import { Tag } from '../../components/Tag';
import { PiReceipt } from "react-icons/pi";
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Container } from './style';

export function ViewDish(){
  const { updateOrders } = useUpdateOrder();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();

  let isAdmin

  user.isAdmin == 1 ? isAdmin = true : isAdmin = false ;  

  const [ingredients, setIngredients] = useState([]);
  // const [order, setAmountOrder] = useState();
  const [dish, setDish] = useState({});
  const [countOrder, setCountOrder] = useState(0);

  async function updateOrder(){
    updateOrders({ amountOrder: countOrder, dish_id: id });
  }

  useEffect(() => {
    (async function fetchDish(){
      try {
          const response = await api.get(`/dishes/${id}`);
          setIngredients(response.data.ingredients);
    
          let dish = {
            ...response.data.dish,
            image: `${api.defaults.baseURL}/files/${response.data.dish.image}`
          }

          console.log(dish)
    
          setDish(dish); 
          setCountOrder(dish.orders)

      } catch (error) {
        console.error(error);
      }
    })()
  },[])

  return(
    <Container>

      <Header 
        valueOrder={0} 
        isAdmin={isAdmin}
      />

        <div className="wrapper">

          <ButtonNavigation 
            title="Voltar" 
            icon={LuChevronLeft} 
            className="buttonNavigation"
            onClick={() => {navigate('/')}}  
          />

            <div className="container-wrapper">

              <img src={dish.image}></img>

              <div className="box-ingredients">

                <div className="box-intern-ingredients">
                  <h1>{dish.name}</h1>
                  <p>{dish.description}</p>
                  <Ingredients className="ingredients">
                    {ingredients.map(ingredient => (
                        <Tag 
                          title={ingredient.name} 
                          key={ingredient.id}
                        />
                      ))
                    }
                  </Ingredients>
                </div>

                <div className="dish-select-box">
                {isAdmin ?
                  (
                    <Button className="dish-insert" title={'Editar prato'} onClick={()=>{navigate(`/editDish/${id}`)}}/>
                  ) :
                  (
                    <>
                      <Stepper countOrder={countOrder} setCountOrder={setCountOrder} className="dish_stepper"/>
                      <Button className="dish-insert" title={`incluir \u2022 R$ ${dish.price * countOrder}`} icon={PiReceipt} onClick={updateOrder}/>
                    </>
                  )
                }
                </div>

            </div>

            </div>
        </div>

      <Footer/>

    </Container>
  )
}