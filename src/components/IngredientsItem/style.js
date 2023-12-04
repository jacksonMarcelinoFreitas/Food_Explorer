import styled, {css}  from 'styled-components';

// export const filterProps = (props) => {
//   const { isNew, ...rest } = props;
//   return rest;
// };

export const Container = styled.div`
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 0 16px;
  border-radius: 8px;

  //Estiliza a div dos inputs
  background-color: ${({theme, $isnew}) => $isnew ? 'transparent' : theme.COLORS.LIGHT_600};
  border: ${({theme, $isnew}) => $isnew ? `1px dashed ${theme.COLORS.LIGHT_600}` : 'none'};


  > input{
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    background: transparent;

    border: none;
  }

  .button-add, .button-remove{
    display: flex;
    background: none;
    border: none;
  }

  .button-add{
    > svg{
      color: ${({theme}) => theme.COLORS.LIGHT_600};
    }
  }
`;