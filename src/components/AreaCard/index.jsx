import { Container } from './style';

export function AreaCard({title, children, ...rest}){
  return(
    <Container {...rest}>
      <p className='title-area'>{title}</p>
      {children}
    </Container>
  )
}