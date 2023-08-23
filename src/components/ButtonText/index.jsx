import { Container } from "./style";

export function ButtonText({title, ...rest}){
  return(
    <Container
      type = "button"
      // isActive = { isActive }
      {...rest}
    >
      {title}
    </Container>
  )
}