import bannerImageDesktop from '../../assets/bannerImageDesktop.png';
import bannerImage from '../../assets/bannerImage.png';
import imageDish  from '../../assets/image-dish1.png';
import { AreaCard } from '../../components/AreaCard';
import { Carousel } from '../../components/Carousel';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Container } from './style';

export function Home(){
    const { user } = useAuth();
    let isAdmin
    
    user.isAdmin == 1 ? isAdmin = true : isAdmin = false ;   

    const [itemsMeals, setItemsMeals] = useState([]);
    const [itemsDrinks, setItemsDrinks] = useState([]);
    const [itemsDesserts, setItemsDesserts] = useState([]);

    useEffect(()=>{
        (async function fetchAllDishes(){

            try {
                const response = await api.get(`/dishes`);
                const data = response.data.map((dish) => ({
                    ...dish,
                    price: `R$ ${dish.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}`,
                    image: `${api.defaults.baseURL}/files/${dish.image}`,
                }));

                console.log(data)
                await classifyDish(data);
                
            } catch (error) {
                console.error(error);
            }
            
        })();

    },[]);

    async function classifyDish(data){
        setItemsMeals(data.filter(item => item.categorie_id === 1 || item.categorie_id === 5 || item.categorie_id === 6 || item.categorie_id === 7));
        setItemsDesserts(data.filter(item => item.categorie_id === 2));
        setItemsDrinks(data.filter(item => item.categorie_id === 3 || item.categorie_id === 4));
    };

    return(
        <Container>
            <Header
                valueOrder={0}
                isAdmin={isAdmin}
            />

            <div className="wrapper">
                <div className="banner-container">
                    <div className='banner'>
                        <picture>
                            <source media="(min-width: 1024px)" srcSet={bannerImageDesktop}/>
                            <source media="(max-width: 599px)" srcSet={bannerImage}/>
                            <img src={bannerImage} alt="Imagem do banner"/>
                        </picture>
                        <div className='text-banner'>
                            <h1>Sabores inigualáveis</h1>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                        </div>
                    </div>
                </div>
                
                <AreaCard title='Refeições'>
                    <Carousel
                        items={itemsMeals}
                        isAdmin={isAdmin}
                    />
                </AreaCard>
                <AreaCard title='Bebidas'>
                    <Carousel
                        items={itemsDrinks}
                        isAdmin={isAdmin}
                    />
                </AreaCard>
                <AreaCard title='Sobremesas'>
                    <Carousel
                        items={itemsDesserts}
                        isAdmin={isAdmin}
                    />
                </AreaCard>
                            
            </div>
        <Footer />

        </Container>
    )
}