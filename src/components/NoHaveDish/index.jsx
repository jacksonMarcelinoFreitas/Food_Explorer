import { Container } from './style';
import no_dish_img from '../../assets/no_dish_here.svg';

export function NoHaveDish(){
  return (
    <Container>
        <img src={no_dish_img} alt="" />
    </Container>
  )
}