import { ButtonNavigation } from '../../components/ButtonNavigation';
import { Ingredients }  from '../../components/Ingredients';
import imageDish  from '../../assets/image-dish1.png';
import { Stepper } from "../../components/Stepper";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { LuChevronLeft } from "react-icons/lu";
import { useNavigate, useParams } from 'react-router-dom';
import { Tag } from '../../components/Tag';
import { PiReceipt } from "react-icons/pi";
import { Container } from './style';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';


export function ViewDish(){
  let countOrder = 1;
  const isAdmin = true;

  const [ingredients, setIngredients] = useState([]);
  const [dish, setDish] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {

    (async function fetchDish(){
      try {
          const response = await api.get(`/dishes/${id}`);
          setIngredients(response.data.ingredients);
    
          let dish = {
            ...response.data.dish,
            price: `R$ ${response.data.dish.price.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`,
            image: `${api.defaults.baseURL}/files/${response.data.dish.image}`
          }
    
          setDish(dish);

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
            onClick={() => {navigate(-1)}}  
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
                      <Stepper countOrder={countOrder} className="dish_stepper"/>
                      <Button className="dish-insert" title={`incluir \u2022 ${dish.price}`} icon={PiReceipt}/>
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