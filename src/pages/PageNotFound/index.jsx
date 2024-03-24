import page_not_found from '../../assets/page_not_found.svg'
import { Footer } from '../../components/Footer';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';


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