import { Container } from './style';

export function Label({title, ...rest}){
  return(
    <Container {...rest}>
      {title}
    </Container>
  )
}