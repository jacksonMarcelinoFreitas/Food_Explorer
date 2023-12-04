import { Container } from './style';

export function ComboBox({children, className, ...rest}){
  return(
    <Container className={className} {...rest}>
      {children}
    </Container>
  )
}