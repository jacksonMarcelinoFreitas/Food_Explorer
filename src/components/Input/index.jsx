import { Container } from './style';

export function Input({icon: Icon, className, placeholder, ...rest}){
  return(
    <Container className={className}>
      {
        Icon&&
        <Icon size={20}/>
      }
      <input
        placeholder={placeholder}
        {...rest}
      />
    </Container>
  )
}