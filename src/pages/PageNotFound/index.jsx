import page_not_found from '../../assets/page_not_found.svg'
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Container } from './style';

export function PageNotFound(){
    const navigate = useNavigate();

    return(
        <Container>
            <div className='wrapper'>
                <img src={page_not_found} alt="page not found" />  
                <Button title='Voltar' onClick={() => {navigate('/')}}/>                          
            </div>
            <Footer />
        </Container>
    )
}