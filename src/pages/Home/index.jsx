import bannerImageDesktop from '../../assets/bannerImageDesktop.png';
import bannerImage from '../../assets/bannerImage.png';
import imageDish  from '../../assets/image-dish1.png';
import { AreaCard } from '../../components/AreaCard';
import { Carousel } from '../../components/Carousel';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Container } from './style';


const items = [
    {
        id: 1,
        image: imageDish,
        name: "Salada Ravanello",
        price: "R$ 49,97",
        description: "Massa fresca com camarões e pesto.",
    },
    {
        id: 2,
        image: imageDish,
        name: "Teste",
        price: "R$ 49,97",
        description: "Massa fresca com camarões e pesto.",
    },
    {
        id: 3,
        image: imageDish,
        name: "Salada Ravanello",
        price: "R$ 49,97",
        description: "Massa fresca com camarões e pesto.",
    },
    {
        id: 4,
        image: imageDish,
        name: "Salada Ravanello",
        price: "R$ 49,97",
        description: "Massa fresca com camarões e pesto.",
    },
    {
        id: 5,
        image: imageDish,
        name: "Salada Ravanello",
        price: "R$ 49,97",
        description: "Massa fresca com camarões e pesto.",
    },
    {
        id: 6,
        image: imageDish,
        name: "Salada Ravanello",
        price: "R$ 49,97",
        description: "Massa fresca com camarões e pesto.",
    },
]

export function Home(){
    let isAdmin = true;

    return(
        <Container>
            <Header
                valueOrder={25}
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
                        items={items}
                        isAdmin={isAdmin}
                    />
                </AreaCard>
                <AreaCard title='Bebidas'>
                    <Carousel
                        items={items}
                        isAdmin={isAdmin}
                    />
                </AreaCard>
                <AreaCard title='Sobremesas'>
                    <Carousel
                        items={items}
                        isAdmin={isAdmin}
                    />
                </AreaCard>
            </div>

        <Footer />

        </Container>
    )
}