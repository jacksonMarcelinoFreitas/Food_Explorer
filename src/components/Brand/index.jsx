import { Container } from './style';
import hexagon from '../../assets/poligon.svg';
import { useNavigate } from "react-router-dom";


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