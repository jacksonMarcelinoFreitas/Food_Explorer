import { Container } from './style';

export function Order({valueOrder, ...rest}){
  return(
    <Container {...rest}>
      {valueOrder}
    </Container>
  )
}