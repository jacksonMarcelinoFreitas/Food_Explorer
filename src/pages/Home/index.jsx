import bannerImageDesktop from '../../assets/bannerImageDesktop.png';
import bannerImage from '../../assets/bannerImage.png';
import { AreaCard } from '../../components/AreaCard';
import { Carousel } from '../../components/Carousel';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { Container } from './style';
import { NoHaveDish } from '../../components/NoHaveDish'

export function Home(){
    const { user } = useAuth();

    let isAdmin
    user.isAdmin == 1 ? isAdmin = true : isAdmin = false ;  
    
    const [search, setSearch] = useState("");
    const [dataMeals, setDataMeals] = useState([]);
    const [dataDrinks, setDataDrinks] = useState([]);
    const [dataDesserts, setDataDesserts] = useState([]);

    //buscar prato por ingredient ou nome no campo de pesquisa
    useEffect (()=> {
        async function fetchDishes(){
            const response = await api.get(`/dishes?name=${search}`);
            const data = response.data.map((dish) => ({
                ...dish,
                price: `R$ ${dish.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}`,
                image: `${api.defaults.baseURL}/files/${dish.image}`,
            }))

            const categorizedData = data.reduce((acc, item) => {
                switch (item.categorie_id) {
                    case 1:
                    case 5:
                    case 6:
                    case 7:
                        acc.meals.push(item);
                        break;
                    case 2:
                        acc.desserts.push(item);
                        break;
                    case 3:
                        acc.drinks.push(item);
                        break;
                    default:
                        break;
                }
                return acc;
            }, { meals: [], desserts: [], drinks: []}); 
            
            console.log(data)
            console.log(categorizedData);
        
            setDataMeals(categorizedData.meals);
            setDataDesserts(categorizedData.desserts);
            setDataDrinks(categorizedData.drinks);
        }

        fetchDishes();
    }, [search]);

    return(
        <Container>
            <Header
                isAdmin={isAdmin}
                setSearch={setSearch}
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
                {dataMeals&& 
                    dataMeals.length > 0 ?
                    <Carousel
                        items={dataMeals}
                        isAdmin={isAdmin}
                    />
                    :
                    <NoHaveDish/>
                }
                </AreaCard>

                <AreaCard title='Bebidas'>
                    {dataDrinks&&
                        dataDrinks.length > 0 ?
                        <Carousel
                            items={dataDrinks}
                            isAdmin={isAdmin}
                        />
                        :
                        <NoHaveDish/>
                    }
                </AreaCard>

                <AreaCard title='Sobremesas'>
                    {dataDesserts&& 
                        dataDesserts.length > 0 ?
                        <Carousel
                            items={dataDesserts}
                            isAdmin={isAdmin}
                        />
                        :
                        <NoHaveDish/>          
                    }
                </AreaCard> 
            </div>
        <Footer />
        </Container>
    )
}


// async function classifyDish(data){
//     setItemsMeals(data.filter(item => item.categorie_id === 1 || item.categorie_id === 5 || item.categorie_id === 6 || item.categorie_id === 7));
//     setItemsDesserts(data.filter(item => item.categorie_id === 2));
//     setItemsDrinks(data.filter(item => item.categorie_id === 3 || item.categorie_id === 4));
// };