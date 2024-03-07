import styled from 'styled-components';
import { device } from '../../screensizes/devices';

export const Container = styled.div`
  overflow-y: hidden;

  .wrapper{
    padding: 0 24px;
  }

  .banner-container{
    display: flex;
    align-items: center;
    justify-content: center;

    grid-area: banner;

    width: 100%;
  }


  .banner {
    display: flex;
    align-items: end;
    justify-content: center;
    flex: 1fr 1fr;

    height: 126px;
    width: 100%;

    margin: 44px 16px 62px 24px;

    border-radius: 12px;

    position: relative;

    background-image: linear-gradient(to bottom, ${({theme}) => theme.COLORS.DARK_900}, ${({theme}) => theme.COLORS.DARK_200});

    img {
      left: -30px;
      bottom: 0;
      position: absolute;
      z-index: 100;
    }

  }

  .text-banner{
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    gap: 2px;

    width: 224px;

    right: 5%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-40%);

    position: absolute;
    z-index: 101  ;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      font-weight: bold;

    }

    p{
      font-family: 'Poppins', sans-serif;
      font-size: 12px;
    }



  }


  @media ${device.desktopSmall} {
    .wrapper{
       padding: 0 108px;
    }
    .banner{
      height: 280px;
      margin: 164px 0px 62px 0px;
    }

    .text-banner{
      width: fit-content;

      height: 50%;
      right: 20%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);

      position: absolute;
      z-index: 101  ;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 40px;
        font-weight: 400;
      }

      p{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
      }
    }


  }
`