import { ButtonNavigation } from '../../components/ButtonNavigation';
import { Ingredients }  from '../../components/Ingredients';
import imageDish  from '../../assets/image-dish1.png';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { LuChevronLeft } from "react-icons/lu";
import { Tag } from '../../components/Tag';
import { PiReceipt } from "react-icons/pi";
import { Container } from './style';


export function AdminDish(){
  let nameDish = 'Salada Ravanello';
  let descriptionDish = 'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.';
  let countOrder = 1;
  let price = 25;


  return(
    <Container>

      <Header isAdmin={true}/>

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
                <Button className="dish-insert" title='Editar prato' />
              </div>

            </div>
        </div>

      <Footer/>

    </Container>
  )
}