import { ButtonNavigation } from '../../components/ButtonNavigation';
import { Ingredients }  from '../../components/Ingredients';
import imageDish  from '../../assets/image-dish1.png';
import { Stepper } from "../../components/Stepper";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { LuChevronLeft } from "react-icons/lu";
import { Tag } from '../../components/Tag';
import { PiReceipt } from "react-icons/pi";
import { Container } from './style';


export function ViewDish(){
  let nameDish = 'Salada Ravanello';
  let descriptionDish = 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.';
  let countOrder = 1;
  let price = 25;


  return(
    <Container>

      <Header/>

        <div className="dish-box">

          <ButtonNavigation title="Voltar" icon={LuChevronLeft} className="buttonNavigation"/>

            <img src={imageDish}></img>

            <div className="box-ingredients">
              <div className="box-intern-ingredients">
                <h1>{nameDish}</h1>
                <p>{descriptionDish}</p>
                <Ingredients>
                  <Tag title="alface"/>
                  <Tag title="cebola"/>
                  <Tag title="pão naan"/>
                  <Tag title="pepino"/>
                  <Tag title="rabanete"/>
                  <Tag title="tomate"/>
                </Ingredients>
              </div>

              <div className="dish-select-box">
                <Stepper countOrder={countOrder} className="dish_stepper"/>
                <Button className="dish-insert" title={'pedir ' + '\u2022 R$' + price + ',00'} icon={PiReceipt}/>
              </div>

            </div>
        </div>

      <Footer/>

    </Container>
  )
}