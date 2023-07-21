import { Container } from './style';
import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Label } from '../../components/Label';
// import { MobileContainer } from '../../components/MobileContainer';

export function SignIn(){
  return(
    <Container>
        <Brand
          className="brand"
        />

        <div className="input-wrapper">
          <Label title='Email'/>
          <Input
            placeholder='Exemplo: exemplo@exemplo.com.br'
            type="email"
          />
        </div>

        <div className="input-wrapper">
          <Label title='Password'/>
          <Input
            placeholder='No mínimo 6 caracteres'
            type="password"
          />
        </div>

        <Button
          title={'Entrar'}
          className="button"
        />

        <ButtonText title={'Criar uma conta'} isActive={true} className="button"/>

    </Container>
  )
}