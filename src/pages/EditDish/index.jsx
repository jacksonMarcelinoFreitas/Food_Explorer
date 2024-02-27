import { ButtonNavigation } from '../../components/ButtonNavigation';
import { IngredientsItem } from '../../components/IngredientsItem';
import { useNavigate, useParams } from 'react-router-dom';
import { ComboBox } from '../../components/ComboBox';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PiUploadSimple } from 'react-icons/pi';
import { LuChevronLeft } from 'react-icons/lu';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { useState, useEffect } from 'react';
import { Container, Form } from './style';
import { api } from '../../services/api';

export function EditDish(){

  const { id } = useParams();
  const navigate = useNavigate();
  const isAdmin=true;

  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState(0);
  const [newImage, setNewImage] = useState(null);
  const [newCategorieId, setNewCategorieId] = useState([]);
  const [newDescription, setNewDescription] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [newIngredients, setNewIngredients] = useState([]);

  const [allCategories, setAllCategories] = useState([]);

  async function handleUpdateDish(){

    const formularioUpload = new FormData();
    formularioUpload.append("name", newName);
    formularioUpload.append("price", newPrice);
    formularioUpload.append("imageDish", newImage);
    formularioUpload.append("description", newDescription);
    formularioUpload.append("categorie_id", newCategorieId);
    formularioUpload.append("ingredients", JSON.stringify(newIngredients));

    try{
      await api.put(`/dishes/${id}`, formularioUpload, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });

      alert('Prato atualizado com sucesso!');
      navigate('/');

    } catch (error) {
      if(error.response){
        alert(error.response.data.message);
      }else{
        alert("Não foi possível criar o prato!")
      }
    }
  }
  
  async function handleDeleteDish(){
    if(confirm("Você tem certeza que deseja excluir este prato?")){
      await api.delete(`/dishes/${id}`);
      alert('Prato removido com sucesso!');
      navigate('/');
    }
  }

  function handleRemoveIngredient(deleted){
    setNewIngredients(prevState => prevState.filter(ingredients => ingredients !== deleted));
  }

  function handleAddIngredients() {
    if (newIngredient.trim() !== '') {
      setNewIngredients(prevState => [...prevState, { name: newIngredient }]);
      setNewIngredient('');

    } else {
      alert('Por favor preenha o campo em branco para adicionar.')
    }
  }

  useEffect(()=>{
    (async function fetchDish(){
      try {

        const response = await api.get(`/dishes/${id}`);
        const { dish, ingredients } = response.data;

        const ingredientsName = ingredients.map(ingredient => ({ name: ingredient.name }));
        
        setNewName(dish.name)
        setNewImage(dish.image)
        setNewPrice(dish.price)
        setNewIngredients(ingredientsName)
        setNewDescription(dish.description)
        setNewCategorieId(dish.categorie_id)

      } catch (error) {

        if (error.response) {
          alert(error.response.data.message);
          if (error.response.status === 403) {
            signOut();
            navigate('/');
          }
        }else{
          alert("Não foi possível trazer a o prato!")
        }

      }

    })();

    (async function fetchAllCategories(){
      try {

        const response = await api.get(`dish/categories`);
        setAllCategories(response.data);

      } catch (error) {
        if (error.response) {
          console.log(error);
        }
      }

    })();

  },[])

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
            <h1>Editar Prato</h1>
            <div className="layout-desktop">
              <div className="box-input">
                <Label className="label" title="Imagem do prato" />
                <label htmlFor="dish" className='upload-image'>
                    <PiUploadSimple size={24}/>
                    <input type='file' id='dish' onChange={e => setNewImage(e.target.files[0])}></input>
                    <span>Selecione imagem para alterá-la</span>
                </label>
              </div>
              <div className="box-input">
                <Label className="label" title="Nome" />
                <Input
                  type="text"
                  placeholder="Ex.: Salada Ceasar"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                />
              </div>
              <div className="box-input">
                <Label className="label" title="Categoria" />
                <ComboBox 
                  value={newCategorieId}  
                  onChange={e => setNewCategorieId(e.target.value)}
                >
                  {allCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
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
                    newIngredients.map((ingredient, index)=> (
                      <IngredientsItem
                        key={String(index)}
                        value={ingredient.name}
                        onClick={() => handleRemoveIngredient(ingredient)}
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
                  placeholder="R$ 00.00"
                  value={newPrice}
                  onChange={e => setNewPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="box-input">
              <Label className="label" title="Descrição" />
              <Textarea
                type="text"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                value={newDescription}
                onChange={e => setNewDescription(e.target.value)}
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