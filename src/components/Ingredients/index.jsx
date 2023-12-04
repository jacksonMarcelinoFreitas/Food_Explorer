import { Container } from './style';

export function Ingredients({children, className, ...rest}){
  return(
    <Container className={className} {...rest}>
      {children}
    </Container>
  )
}