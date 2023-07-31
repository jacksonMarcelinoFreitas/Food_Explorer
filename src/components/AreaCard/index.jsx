import { Container } from './style';

export function AreaCard({title, children, ...rest}){
  return(
    <Container {...rest}>
      <p className='title-area'>{title}</p>
      <div className='area-cards'>
        {children}
      </div>
    </Container>
  )
}