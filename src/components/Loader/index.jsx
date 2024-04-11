import { Container } from './style';
import { ClipLoader } from 'react-spinners'

export function Loader() {
    return(
        <Container>
            <ClipLoader size={40} color={"#00FFFF"} />
            <p>Carregando ...</p>
        </Container>
    );
}