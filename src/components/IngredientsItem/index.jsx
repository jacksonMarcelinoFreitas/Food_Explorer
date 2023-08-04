import { Container } from './style';
import { FiX, FiPlus } from 'react-icons/fi';

export function IngredientsItem({isnew, value, onClick, ...rest}){
  return(
      <Container isnew={isnew} {...rest}>
        <input
          type='text'
          value={value}
          readOnly={!isnew}
          {...rest}
        />

        <button
          type='button'
          onClick={onClick}
          className={isnew ? 'button-add' : 'button-remove'}
        >
          {
            isnew ? <FiPlus size={12}/> : <FiX size={12} />
          }
        </button>
      </Container>
  )
}