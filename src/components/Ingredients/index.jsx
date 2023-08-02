import { Container } from './style';

export function Ingredients({children, ...rest}){
  return(
    <Container {...rest}>
      {children}
    </Container>
  )
}