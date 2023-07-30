import { Container } from './style';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { FiSearch } from 'react-icons/fi'

export function Home(){
    return(
        <Container>
            <Header/>
            <Input
                placeholder='Busque por pratos ou ingredientes'
                icon={FiSearch}
            />
        </Container>
    )
}