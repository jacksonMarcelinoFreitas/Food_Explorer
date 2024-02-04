import { ButtonNavigation } from '../../components/ButtonNavigation';
import { IngredientsItem } from '../../components/IngredientsItem';
import { Button } from '../../components/Button';
import { Textarea } from '../../components/Textarea';
import { ComboBox } from '../../components/ComboBox';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PiUploadSimple } from 'react-icons/pi';
import { LuChevronLeft } from 'react-icons/lu';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Container, Form } from './style';
import { useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export function EditDish(){
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [categories, setCategories] = useState(["Teste1", "Teste2", "Teste3"]);
  const [ingredients, setIngredient] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const isAdmin=true;

  function handleAddIngredients(){
    setIngredient(prevState => [...prevState, newIngredient]);
    setNewIngredient("")
  }

  async function handleUpdateDish(){
    await api.put('dishes', {
      name,
      image,
      price,
      categories,
      ingredients,
      description,
    })

    alert('Prato atualizado com sucesso!');
    navigate('/admin/edit_dish');
  }

  async function handleDeleteDish(){
    await api.delete('dishes');

    alert('Prato removido com sucesso!');
    navigate('');
  }

  function handleRemoveDish(deleted){
    setIngredient(prevState => prevState.filter(ingredients => ingredients !== deleted));
  }

  return(
    <Container>
      <Header isAdmin={isAdmin}/>

      <div className="wrapper">
        <div className="container-wrapper">
          <ButtonNavigation
            title="voltar"
            icon={LuChevronLeft}
            className="buttonNavigation"
          />
          <Form>
            <h1>Novo Prato</h1>
            <div className="layout-desktop">
              <div className="box-input">
                <Label className="label" title="Imagem do prato" />
                <label htmlFor="dish" className='upload-image'>
                    <PiUploadSimple size={24}/>
                    <input type='file' id="dish"></input>
                    <span>Selecione imagem para alterá-la</span>
                </label>
              </div>
              <div className="box-input">
                <Label className="label" title="Nome" />
                <Input
                  type="text"
                  placeholder="Ex.: Salada Ceasar"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="box-input">
                <Label className="label" title="Categoria" />
                <ComboBox>
                  {
                    categories.map((category, index) => (
                      <option key={String(index)}>{category}</option>
                    ))
                  }
                </ComboBox>
              </div>
            </div>
            <div className="layout-desktop">
              <div className="box-input">
                <Label className="label" title="Ingredients" />
                <div className='box-ingredients'>
                  {
                    ingredients.map( (ingredient, index)=> (
                      <IngredientsItem
                        key={String(index)}
                        value={ingredient}
                        onClick={() => handleRemoveDish(ingredient)}
                      />
                    ))
                  }
                  <IngredientsItem
                        isnew
                        placeholder="Adicionar"
                        value={newIngredient}
                        onChange={e => setNewIngredient(e.target.value)}
                        onClick={handleAddIngredients}
                      />
                </div>
              </div>
              <div className="box-input">
                <Label className="label" title="Preço" />
                <Input
                  type="text"
                  placeholder="R$ 00,00"
                  value={price}
                  onChange={e => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="box-input">
              <Label className="label" title="Descrição" />
              <Textarea
                type="text"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <div className="box-button">
              <Button title="Excluir prato" className="button-delete" onClick={handleDeleteDish}/>
              <Button title="salvar alterações" className="button-save" onClick={handleUpdateDish}/>
            </div>
          </Form>
        </div>
      </div>

      <Footer />
    </Container>
  )
}