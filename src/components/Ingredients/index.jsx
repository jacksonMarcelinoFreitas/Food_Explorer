import { Container } from './style';
import { Tag } from '../../components/Tag';
export function Ingredients({...rest}){
  return(
    <Container {...rest}>
      <Tag title="alface"/>
      <Tag title="cebola"/>
      <Tag title="pão naan"/>
      <Tag title="pepino"/>
      <Tag title="rabanete"/>
      <Tag title="tomate"/>
    </Container>
  )
}