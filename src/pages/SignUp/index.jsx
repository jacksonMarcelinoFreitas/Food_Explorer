import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from './style';
import { api } from '../../services/api';
import { Brand } from '../../components/Brand';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Label } from '../../components/Label';
// import { MobileContainer } from '../../components/MobileContainer';

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp(){
    if(!name || !email || !password){
      return alert("⚠️Todos os campos devem ser preenchidos!")
    }

    await api.post("/users", { name, email, password })
      .then(() => {
          alert("Usuário cadastrado com sucesso!");
          navigate("/login");
      })
      .catch(error => {
          if(error.response){
              alert(error.response.data.message);
          } else {
              alert("Não foi possível cadastrar");
          }
      });

  }

  return(
    <Container>
        <Brand
          className="brand"
        />

        <div className="input-wrapper">
          <Label title='Seu nome'/>
          <Input
            placeholder='Exemplo: Maria da Silva'
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <Label title='Email'/>
          <Input
            placeholder='Exemplo: exemplo@exemplo.com.br'
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <Label title='Password'/>
          <Input
            placeholder='No mínimo 6 caracteres'
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button
          onClick={handleSignUp}
          title={'Criar conta'}
          className="button"
        />

        <ButtonText title={'Já tenho uma conta'} className="button"/>

    </Container>
  )
}