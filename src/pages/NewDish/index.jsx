import { ButtonNavigation } from '../../components/ButtonNavigation';
import { IngredientsItem } from '../../components/IngredientsItem';
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
import { useAuth } from '../../hooks/auth';
import { Container, Form } from './style';
import { api } from '../../services/api';
import { useState, useEffect } from 'react';


export function NewDish(){
  // const imageUrl = dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : avatarPlaceholder;
  // const [image, setImage] = useState(imageUrl);
  // const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();
  const userData = useAuth();
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredient] = useState([]);
  const [description, setDescription] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);


  function handleAddIngredients(){
    setIngredient(prevState => [...prevState, newIngredient]);
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted){
    setIngredient(prevState => prevState.filter(ingredients => ingredients !== deleted));
  }

  async function handleAddNewDish(){
    const dish = {
      name,
      price,
      description,
      image,
      ingredients,
      categorie_id: selectedCategory
    }

    console.log(dish)

    await createNewDish({dish})

    // await updateImage({dish, imageFile});
  }

  async function createNewDish({dish}){
    await api.post("/dishes", dish);
  }

  useEffect(()=>{

    async function fetchCategories(){
      try {

        const response = await api.get(`dish/categories`);

        const categoriesData = response.data;

        setCategories(categoriesData);


      } catch (error) {
        if (error.response) {
          console.log(error);
        }
      }

    }

    fetchCategories();

  },[]);

  //função para gerar o preview da imagem
  // function handleChangeImage(event){
  //   const file = event.target.files[0];
  //   setImageFile(file);

  //   const imagePreview = URL.createObjectURL(file);
  //   setImage(imagePreview);
  // }

  //função para atualizar a imagem
  // async function updateImage({dish, imageFile}){
  //   try{
  //     if(imageFile){
  //       const fileUploadForm = new FormData();
  //       fileUploadForm.append("image", imageFile);
  //       const response = await api.patch("/dishes", fileUploadForm);
  //       dish.image = response.data.image;
  //     }

  //   } catch (error) {

  //     if(error.response){
  //       alert(error.response.data.message);

  //     }else{

  //       alert("Não foi possível atualizar a imagem.");

  //     }
  //   }
  // }

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
                      onChange={() => {}}>
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
                <ComboBox onChange={(e) => setSelectedCategory(e.target.value)}>
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
                  onChange={e => setPrice(e.target.value)}
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
              onClick={handleAddNewDish}
            />
          </Form>
        </div>
      </div>

      <Footer />
    </Container>
  )
}