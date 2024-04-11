import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 114px auto 76px;
  grid-template-areas:
  'header'
  'menu'
  'footer';

  width: 100%;
  height: 100vh;

  header{
    display: flex;
    justify-content: left;

    grid-area: header;

    background: ${({theme}) => theme.COLORS.DARK_700};
    width: 100%;
    padding: 56px 28px 24px 28px;
  }

  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper-menu{
    grid-area: menu;

    width: 100%;
    padding: 28px 36px 14px 28px
  }

  .card-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    margin: 16px 0;
  }

`

export const ButtonCloseMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 16px;

  background: none;
  border: none;

  padding: 4px 0;

  fill: white;
`

export const CardBox = styled.div`

  &:hover{
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  justify-content: left;
  gap: 24px;
  width: 100%;
  height: 200px;

  padding: 24px;

  font-family: 'Poppins', sans-serif;

  border-radius: 12px;
  background-color: ${({theme}) => theme.COLORS.DARK_700};

  .box-description{
    width: 100%;
    display: flex;
    align-items: right;
    justify-content: center;
    flex-direction: column;

    .dish-name{
      font-family: 'Poppins', sans-serif;
      font-size: clamp(16px, 2vw, 20px);
      font-weight: 700;
      color: ${({theme}) => theme.COLORS.CAKE_200};
      margin-bottom: 4px;
    }

    .dish-description{
      font-size: clamp(12px, 2vw, 14px);
      font-weight: 200;
    }

    .dish-price{
      font-size: clamp(12px, 2vw, 14px);
      font-weight: 400;
      color: ${({theme}) => theme.COLORS.CAKE_200};
      width: 100%;
      margin-top: 16px;
      text-align: end;
    }
  }

  .image-dish{
    img{
      width: clamp(70px, 20vw, 100px);
    }
  }
`
