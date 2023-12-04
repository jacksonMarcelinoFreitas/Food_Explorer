import { Container } from './style';
import hexagon from '../../assets/poligon.svg';

export function Brand({...rest}){
  return(
    <Container {...rest}>
      <img className='iconBrand' src={hexagon}/>
      <p className='textBrand'>food explorer</p>
    </Container>
  )
}