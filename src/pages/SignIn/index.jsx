import { Container } from './style';
import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
// import { MobileContainer } from '../../components/MobileContainer';

export function SignIn(){
  return(
    <Container>
        <Brand/>

        <Input placeholder='Exemplo: exemplo@exemplo.com.br'/>

        <Input placeholder='No mínimo 6 caracteres'/>

        <Button title={'Entrar'}/>

        <ButtonText title={'Criar uma conta'}/>

    </Container>
  )
}