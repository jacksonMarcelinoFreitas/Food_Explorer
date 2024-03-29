import { useNavigate } from "react-router-dom";
import hexagon from '../../assets/poligon.svg';
import { Container } from './style';


export function Brand({...rest}){
  const navigate = useNavigate();
  return(
    <Container {...rest}
      onClick={() => {navigate("/")}}
    >
      <img className='iconBrand' src={hexagon}/>
      <p className='textBrand'>food explorer</p>
    </Container>
  )
}