import { Container } from './style';

export function ComboBox({children, ...rest}){
  return(
    <Container {...rest}>
      {children}
    </Container>
  )
}