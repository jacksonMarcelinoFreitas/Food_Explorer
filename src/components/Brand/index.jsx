import { Container } from './style';
import hexagon from '../../assets/hexagon.png';

export function Brand(){
  return(
    <Container>
      <img src={ hexagon }/>
      <p>food explorer</p>
    </Container>
  )
}