import { Container } from './style';
import hexagon from '../../assets/hexagon.png';

export function Tag({title, ...rest}){
  return(
    <Container {...rest}>
      {title}
    </Container>
  )
}