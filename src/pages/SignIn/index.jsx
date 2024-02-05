import { WrapperInput } from '../../components/WrapperInput';
import { ButtonText } from '../../components/ButtonText';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Brand } from '../../components/Brand';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { Container } from './style';
import { useState } from "react"

export function SignIn(){
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const {signIn} = useAuth();

  function handleSignIn(){
    signIn({email, password});
  }

  return(
    <Container>
        <div className="wrapper">

          <Brand
            className="brand"
          />

          <div className="box-wrapper">

            <h1 className='hidden'>Faça login</h1>
            <WrapperInput>
                <Label title='Email'/>
                <Input
                  type="email"
                  placeholder='Exemplo: exemplo@exemplo.com.br'
                  onChange={e => setEmail(e.target.value)}
                />
            </WrapperInput>
    
            <WrapperInput>
              <Label title='Password'/>
              <Input
                type="password"
                placeholder='No mínimo 6 caracteres'
                onChange={e => setPassword(e.target.value)}
              />
            </WrapperInput>

            <Button
              title={'Entrar'}
              className="button"
              onClick={handleSignIn}
            />

            <ButtonText title={'Criar uma conta'} className="button" onClick={()=> {navigate('/register')}}/>
          </div>

        </div>
    </Container>
  )
}