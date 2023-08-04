import { ButtonNavigation } from '../../components/ButtonNavigation';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { IngredientsItem } from '../../components/IngredientsItem';
import { ComboBox } from '../../components/ComboBox';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PiUploadSimple } from 'react-icons/pi';
import { LuChevronLeft } from 'react-icons/lu';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Container, Form } from './style';


export function AdminNewDish(){
  return(
    <Container>
      <Header isAdmin={true}/>
      <Form>
        <ButtonNavigation title="voltar" icon={LuChevronLeft} className="buttonNavigation"/>

        <h1>Novo Prato</h1>

        <div className="box-input">
          <Label className="label" title="Imagem do prato" />

          <label htmlFor="dish" className='upload-image'>
              <PiUploadSimple size={24}/>
              <input type='file' id="dish" ></input>
              <span>Selecione imagem</span>
          </label>

        </div>

        <div className="box-input">
          <Label className="label" title="Nome" />
          <Input type="text" placeholder="Ex.: Salada Ceasar"></Input>
        </div>

        <div className="box-input">
          <Label className="label" title="Categoria"/>
          <ComboBox>
            <option>Refeição</option>
            <option>Teste</option>
            <option>Teste</option>
            <option>Teste</option>
          </ComboBox>
        </div>

        <div className="box-input">

          <Label className="label" title="Ingredients" />

          <div className='box-ingredients'>
            <IngredientsItem
              value="Pão Naan"
            />

            <IngredientsItem
              isnew
              placeholder="Adicionar"
            />
          </div>

        </div>

        <div className="box-input">
          <Label className="label" title="Preço" />
          <Input type="text" placeholder="R$ 00,00"></Input>
        </div>

        <div className="box-input">
          <Label className="label" title="Descrição" />
          <Textarea type="text" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></Textarea>
        </div>

        <Button title="salvar alterações" className="button-save"/>
      </Form>

      <Footer />
    </Container>
  )
}