import { ButtonNavigation} from '../../components/ButtonNavigation';
import { Container, ButtonCloseMenu } from './style';
import { Input } from '../../components/Input';
import { FiX, FiSearch } from 'react-icons/fi';
import { Footer} from '../../components/Footer';

export function Menu(){
    return(
        <Container>
            <header>
                <ButtonCloseMenu className='buttonCloseMenu'>
                    <FiX size={22}/>
                    <span>Menu</span>
                </ButtonCloseMenu>
            </header>

            <div className='wrapper-menu'>
                <Input
                    placeholder='Busque por pratos ou ingredientes'
                    icon={FiSearch}
                />
                <ButtonNavigation title="Sair"/>
            </div>

            <Footer/>
        </Container>
    )
}