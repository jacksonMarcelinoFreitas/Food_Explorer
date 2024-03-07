import { Button } from '../Button';
import { Container } from './style';

export function CardOrder({className, data, ...rest}){
  return(
    <Container className={className} {...rest}>
      <div className='image-dish'>
        <img src={data.image} alt="image dish" />
      </div>
      <div className='description-order'>
        <p>{data.amount}x {data.name} <span>R${data.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
        </p>
        <Button title={'Exclur'}/>
      </div>
    </Container>
  )
}