import styled from 'styled-components';
import { device } from '../../screensizes/devices';

export const Container = styled.div`
  .wrapper{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 32px;

    padding: 24px 32px 64px 32px;

    h1{
      font-family: 'Poppins', sans-serif;
      font-size: 32px;
      font-weight: 400;

      color: ${({theme}) => theme.COLORS.LIGHT_300};

      margin-bottom: 24px;
      padding-left: 12px;
    }

  }

  .box-orders{
    width: 100%;

    .cards{
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 12px;
    }

    p.amount{
      margin-top: 16px;

      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      font-weight: 400;
      text-align: right;
      padding-right: 24px;

      color: ${({theme}) => theme.COLORS.CAKE_200};
    }
  }

  .box-wrapper,
  .box-square,
  .box-method {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;

    width: 100%;

    .box-square{
      align-items: center;
  
      border:  2px solid  ${({theme}) => theme.COLORS.LIGHT_700};
      border-radius: 8px;

      .box-button{
        width: 100%;
        display: flex;
        grid-area: buttons;

        border-bottom: 2px solid ${({theme}) => theme.COLORS.LIGHT_700};

        button:first-child{
          border-right: 2px solid ${({theme}) => theme.COLORS.LIGHT_700}
        }
      }
    }

    .box-method{
      align-items: center;
      padding: 32px;
        
      img, form{
        height: 300px;
      }
  
      form{
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
  }

  .not-have-order{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    padding: 32px;
    height: calc(100vh - 114px - 76px);

    img{
      max-width:400px;
      width: 70%;
      opacity: .4;      
    }

    p{
      font-family: 'Poppins', sans-serif;
      font-weight: 300;
      font-size: clamp(16px, 5vw, 24px);
      line-height: 28px;
      color: ${({theme}) => theme.COLORS.CAKE_200};
      text-align: center;
    }
  }


  @media ${device.tablet} {
    .wrapper{
      flex-direction: row;
      align-items: start;
      gap: 64px;
    }

    .box-orders{
      width: 60%;

      .cards-scroll{
        padding: 12px 0;
        width: 100%;
        height: 50vh;
        overflow: scroll;

        &::-webkit-scrollbar-track {
          background: transparent;
        }
        &::-webkit-scrollbar {
          width: 6px;
        }
        &::-webkit-scrollbar-thumb {
          ${({theme}) => theme.COLORS.LIGHT_700};
        }
        &::-webkit-scrollbar-corner {
          background: transparent;
        }
      }

      .cards{
        padding-right: 12px;        
      }

      p.amount{
        margin-top: 8px;
        padding-left: 24px;
        text-align: left;
      }
    }

    .box-wrapper{
      width: 40%;
    }

    .box-method{
      padding: 32px;
      width: 100%;
      height: 50vh;
        
      img, form{
        width: 90%;
      }
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
      color:  ${({theme}) => theme.COLORS.CAKE_200};
    }

    p{
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: 100;
    }
  `
