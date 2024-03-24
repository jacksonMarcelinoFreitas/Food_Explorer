import { Button } from '../Button';
import { Container } from './style';
import { api } from '../../services/api';

export function CardOrder({className, data, deleteOrder, ...rest}){
  const handleDeleteOrder = () => {
    deleteOrder(data.dish_id);
  };
  return(
    <Container className={className} {...rest}>
      <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="image dish" className='image-dish' />
      <div className='description-order'>
        <p>{data.orders}x {data.name} <span>R${data.price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
        </p>
        <Button title={'Exclur'} onClick={handleDeleteOrder}/>
      </div>
    </Container>
  )
}