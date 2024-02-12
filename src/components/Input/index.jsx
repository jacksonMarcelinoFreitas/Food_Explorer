import { Container } from './style';

export function Input({icon: Icon, className, placeholder, onChange, value, ...rest}){
  return(
    <Container className={className}>
      {
        Icon&&
        <Icon size={20}/>
      }
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </Container>
  )
}