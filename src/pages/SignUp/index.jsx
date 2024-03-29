import { WrapperInput } from '../../components/WrapperInput';
import { ButtonText } from '../../components/ButtonText';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';
import { Brand } from '../../components/Brand';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Container } from './style';
import { useState } from 'react';

export function SignUp(){
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  async function handleSignUp(){
    if(!name || !email || !password){
      toast.warn("Todos os campos devem ser preenchidos!")
    }

    await api.post("/users", { name, email, password })
      .then(() => {
          toast.success("Todos os campos devem ser preenchidos!")
          navigate("/");
      })
      .catch(error => {
          if(error.response){
              toast.error(`${error.response.data.message}`)
              console.error(error.response.data.message)
            } else {
              toast.error("Não foi possível cadastrar")
          }
      });

  }

  return(
    <Container>
        <div className="wrapper">

          <Brand
            className="brand"
          />

          <div className="box-wrapper">
            <h1 className='hidden'>Crie sua conta</h1>
            <WrapperInput>
              <Label title='Seu nome'/>
              <Input
                type="text"
                placeholder='Exemplo: Maria da Silva'
                onChange={e => setName(e.target.value)}
              />
            </WrapperInput>

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
              onClick={handleSignUp}
              title={'Criar conta'}
              className="button"
            />

            <ButtonText
              onClick={() => {navigate('/')}}
              title={'Já tenho uma conta'}
              className="button"
            />

          </div>
        </div>

    </Container>
  )
}