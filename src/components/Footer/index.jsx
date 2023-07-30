import { Container } from './style';
import { Brand } from '../../components/Brand';
export function Footer(){
  return (
    <Container>
      <Brand className="brand"/>
      <span>&#169; 2023 - Todos os direitos reservados</span>
    </Container>
  )
}