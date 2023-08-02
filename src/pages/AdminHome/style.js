import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  /* overflow-y: scroll; */

  .banner-container{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    overflow: hidden;
  }


  .banner {
    display: flex;
    align-items: end;
    justify-content: center;
    flex: 1fr 1fr;

    height: 120px;
    width: 100%;
    margin: 44px 16px 62px 24px;

    position: relative;

    background-image: linear-gradient(to bottom, ${({theme}) => theme.COLORS.DARK_900}, ${({theme}) => theme.COLORS.DARK_200});



    > img {
      width: 191px;
      left: -30px;
      bottom: 0;
      position: absolute;
      z-index: 100;
    }



    > p {
      z-index: 100;
      font-size: 12px;
      font-family: 'Poppins', sans-serif;

      width: 224px;
      /* height: 100%; */

      top: 60%;
      right: 5%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);

      position: absolute;

      > span{
        font-size: 18px;
        font-weight: 500;

        display: block;
      }
    }
  }
`