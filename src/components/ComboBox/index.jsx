import { Container } from './style';

export function ComboBox({value, children, className, onChange, ...rest}){



  return(
    <Container className={className} value={value} onChange={onChange} {...rest}>
      {children}
    </Container>
  )
}