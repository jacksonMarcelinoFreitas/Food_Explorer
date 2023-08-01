import { Container } from "./style";

export function Button({title, icon: Icon, loading = false, ...rest}){
  return(
    <Container
      type = "button"
      disabled = { loading }
      {...rest}
    >
      <div className="icon">
        {
          Icon&&
          <Icon size={22}/>
        }
      </div>
      <p>
        {loading ? 'Carregando...' : title}
      </p>
    </Container>
  )
}