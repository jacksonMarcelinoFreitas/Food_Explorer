import { Button } from '../Button';
import { Container } from './style';

export function ButtonNavigation({title, icon: Icon, ...rest}){
  return(
    <Container  {...rest}>
      <div className='icon'>
        {
          Icon&&
          <Icon size={36}/>
        }
      </div>
      <p>{title}</p>
    </Container>
  )
}

Button