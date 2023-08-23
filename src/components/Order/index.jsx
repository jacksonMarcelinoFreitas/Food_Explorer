import { Container } from './style';

export function Order({valueOrder, ...rest}){
  // let number = 0
  return(
    <Container {...rest}>
      {valueOrder}
    </Container>
  )
}