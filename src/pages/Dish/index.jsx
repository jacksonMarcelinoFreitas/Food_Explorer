import { Container } from './style';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Stepper } from "../../components/Stepper";
import { ButtonNavigation } from '../../components/ButtonNavigation';
import imageDish  from '../../assets/image-dish1.png';
import { Ingredients }  from '../../components/Ingredients';
import { LuChevronLeft } from "react-icons/lu";
import { PiReceipt } from "react-icons/pi";

export function Dish(){
  let nameDish = 'Salada Ravanello';
  let descriptionDish = 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.'
  let teste = 25


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
                <Ingredients />
              </div>

              <div className="dish-select-box">
                <Stepper className="dish_stepper"/>
                <Button className="dish-insert" title={'pedir ' + '\u2022 R$' + teste + ',00'} icon={PiReceipt}/>
              </div>

            </div>
        </div>

      <Footer/>

    </Container>
  )
}