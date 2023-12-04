import { Container } from "./style";

export function Button({title, icon: Icon, loading = false, ...rest}){
  return(
    <Container
      type = "button"
      disabled = { loading }
      {...rest}
    >
      {
        Icon&&
        <Icon size={22}/>
      }
      <p>
        {loading ? 'Carregando...' : title}
      </p>
    </Container>
  )
}