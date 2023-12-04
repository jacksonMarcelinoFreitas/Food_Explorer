import { Container } from "./style";

export function WrapperInput({children, ...rest}){
  return(
    <Container {...rest}>
      {children}
    </Container>
  )
}