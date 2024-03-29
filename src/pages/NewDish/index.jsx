import { ButtonNavigation } from '../../components/ButtonNavigation';
import { IngredientsItem } from '../../components/IngredientsItem';
import imageDishDefault from '../../assets/dish_default.jpg'
import { ComboBox } from '../../components/ComboBox';
import { Textarea } from '../../components/Textarea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PiUploadSimple } from 'react-icons/pi';
import { LuChevronLeft } from 'react-icons/lu';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container, Form } from './style';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

export function NewDish(){
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [price, setPrice] = useState();
  const [categories, setCategories] = useState([]);
  const [description, setDescription] = useState('');
  const [ingredients, setIngredient] = useState([]);
  const [newIngredient, setNewIngredient] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [imageDishFile, setImageDishFile] = useState(null);

  function handleAddImageDish(event){
    const file = event.target.files[0];
    file != null ? setImageDishFile(file) : setImageDishFile(imageDishDefault); 
  }

  function handleAddIngredients(){
    setIngredient(prevState => [...prevState, newIngredient]);
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted){
    setIngredient(prevState => prevState.filter(ingredients => ingredients !== deleted));
  }

  async function handleCreateNewDish(){
    try{

      if (imageDishFile) {
        const formularioUpload = new FormData();
        formularioUpload.append("imageDish", imageDishFile);
        formularioUpload.append("name", name);
        formularioUpload.append("price", price);
        formularioUpload.append("description", description);
        formularioUpload.append("ingredients", ingredients);
        formularioUpload.append("categorie_id", selectedCategoryId);
  
        await api.post("/dishes", formularioUpload, {
          headers: {
            "Content-Type": "multipart/form-data", // Importante para uploads de arquivos
          },
        });

        toast.success("Prato criado com sucesso!");

        navigate('/');

      } else {
        toast.warn("Por favor, insira uma imagem para o prato!");
      }

    } catch (error) {
      if(error.response){
        toast.error(`${error.response}`);
      }else{
        toast.error("Não foi possível criar o prato!");
      }
    }
  }

  useEffect(()=>{

    async function fetchCategories(){
      try {

        const response = await api.get(`dish/categories`);
        const categoriesData = response.data;

        setCategories(categoriesData);

      } catch (error) {
        if (error) {
          toast.error(`${error}`);
        }else{
          toast.error("Falha ao carregar dados!");
        }
      }

    }

    fetchCategories();

  },[]);


  return(
    <Container>
      <Header isAdmin={true}/>

      <div className="wrapper">
        <div className="container-wrapper">
          <ButtonNavigation title="voltar" icon={LuChevronLeft} className="buttonNavigation" onClick={() => navigate("/")}/>
          <Form>
            <h1>Novo Prato</h1>
            <div className="layout-desktop">
              <div className="box-input">
                <Label className="label" title="Imagem do prato" />
                <label htmlFor="dish" className='upload-image'>
                    <PiUploadSimple size={24}/>
                    <input
                      type='file'
                      id="dish"
                      onChange={ handleAddImageDish }
                    >
                    </input>
                    <span>Selecione imagem</span>
                </label>
              </div>
              <div className="box-input">
                <Label className="label" title="Nome" />
                <Input
                  type="text"
                  placeholder="Ex.: Salada Ceasar"
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="box-input">
                <Label className="label" title="Categoria"/>
                <ComboBox 
                  value={selectedCategoryId}
                  onChange={(e) => setSelectedCategoryId(parseInt(e.target.value))}
                >
                  {
                    categories.map((category) => (
                      <option
                        key={category.id} value={category.id}>
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
                    ingredients.map( (ingredient, index)=> (
                      <IngredientsItem
                        key={String(index)}
                        value={ingredient}
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
                  placeholder="R$ 00,00"
                  onChange={e => setPrice(parseFloat(e.target.value))}
                />
              </div>
            </div>
            <div className="box-input">
              <Label className="label" title="Descrição" />
              <Textarea
                type="text"
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={e => setDescription(e.target.value)}
              />
            </div>
            <Button
              title="salvar alterações"
              className="button-save"
              onClick={handleCreateNewDish}
            />
          </Form>
        </div>
      </div>
      <Footer />
    </Container>
  )
}