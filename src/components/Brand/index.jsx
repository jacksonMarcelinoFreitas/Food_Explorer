import { Container } from './style';
import hexagon from '../../assets/hexagon.png';

export function Brand({...rest}){
  return(
    <Container {...rest}>
      <img src={ hexagon }/>
      <p>food explorer</p>
    </Container>
  )
}