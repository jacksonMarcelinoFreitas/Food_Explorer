import bannerImage from '../../assets/bannerImage.png';
import imageDish  from '../../assets/image-dish1.png';
import { AreaCard } from '../../components/AreaCard';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Card } from '../../components/Card';
import { Container } from './style';

export function Home(){
    let data = false;
    return(
        <Container>
            <Header valueOrder={25}/>

            <div className="banner-container">
                <div className='banner'>
                    <img src={bannerImage}></img>
                    <p>
                        <span>Sabores inigualáveis</span>
                        Sinta o cuidado do preparo com ingredientes selecionados.
                    </p>
                </div>
            </div>

            <AreaCard
                title="Refeições"
                className="area-card">

                <Card
                    icon={data}
                    image={imageDish}
                    name="Salada Ravanello"
                    price="R$ 49,97"
                />

                <Card
                    icon={data}
                    image={imageDish}
                    name="Salada Ravanello"
                    price="R$ 49,97"
                />

            </AreaCard>
            <AreaCard
                title="Pratos principais"
                className="area-card">

                <Card
                    icon={data}
                    image={imageDish}
                    name="Salada Ravanello"
                    price="R$ 49,97"
                />

                <Card
                    icon={data}
                    image={imageDish}
                    name="Salada Ravanello"
                    price="R$ 49,97"
                />
            </AreaCard>

            <Footer />

        </Container>
    )
}