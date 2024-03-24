import styled from 'styled-components';
import { device } from '../../screensizes/devices';

export const Container = styled.div`
  /* overflow-y: hidden; */
  footer{
    position: absolute;
    bottom: 0;

  }

  .not-have-order{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
    flex-direction: column;
    gap: 24px;

    p{
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: 24px;
      color: ${({theme}) => theme.COLORS.CAKE_200};
    }
  }

  .wrapper{
    padding: 24px 196px;

    display: flex;
    align-items: start;
    justify-content: space-evenly;
    gap: 74px;

    h1{
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 400;

      color: ${({theme}) => theme.COLORS.LIGHT_300};

      margin-bottom: 32px;
    }

  }

  .box-orders{
    .cards{
      padding-right: 32px;
      height: 50vh;
      overflow-y: auto;

      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar {
          width: 6px;
      }
      &::-webkit-scrollbar-thumb {
        ${({theme}) => theme.COLORS.LIGHT_700};
      }
    }

    p.amount{
      margin-top: 16px;

      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      font-weight: 400;

      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }
  }

  
  
  .box-square{
    display: flex;
    align-items: center;
    justify-content: baseline;
    flex-direction: column;

    width: 530px;

    border:  2px solid  ${({theme}) => theme.COLORS.LIGHT_700};
    border-radius: 8px;

    overflow: hidden;
  }

  .box-method{
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 100%;

    img, form{
      width: 250px;
      padding: 56px 0;
    }

    form{
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 36px;

      .field, .field:nth-child(2){
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 8px;
      }

      .field:nth-child(2){
        flex-direction: row;
        gap: 16px;

        > div{
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
      }

    }
  }

  

  .box-button{
    width: 100%;
    display: flex;
    grid-area: buttons;

    border-bottom: 2px solid ${({theme}) => theme.COLORS.LIGHT_700};

    button:first-child{
      border-right: 2px solid ${({theme}) => theme.COLORS.LIGHT_700}
    }
  }
  `

  export const ButtonPayment = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    width: 100%;
    border: none;
    padding: 14px;

    background-color: ${({theme}) => theme.COLORS.DARK_700};

    position: relative;

    &.selected{
      background-color: ${({theme}) => theme.COLORS.DARK_900};
    }

    p{
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 100;
    }
  `
