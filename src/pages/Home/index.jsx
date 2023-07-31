import { Container } from './style';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { FiSearch } from 'react-icons/fi'
import bannerImage from '../../assets/bannerImage.png';
import { AreaCard } from '../../components/AreaCard';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import imageDish  from '../../assets/image-dish1.png';

export function Home(){
    return(
        <Container>
            <Header/>

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
                    icon={AiOutlineHeart}
                    image={imageDish}
                    name="Salada Ravanello"
                    price="R$ 49,97"
                />

                <Card
                    icon={AiOutlineHeart}
                    image={imageDish}
                    name="Salada Ravanello"
                    price="R$ 49,97"
                />
            </AreaCard>
            <AreaCard
                title="Pratos principais"
                className="area-card">

                <Card
                    icon={AiOutlineHeart}
                    image={imageDish}
                    name="Salada Ravanello"
                    price="R$ 49,97"
                />

                <Card
                    icon={AiOutlineHeart}
                    image={imageDish}
                    name="Salada Ravanello"
                    price="R$ 49,97"
                />
            </AreaCard>

            <Footer />

        </Container>
    )
}