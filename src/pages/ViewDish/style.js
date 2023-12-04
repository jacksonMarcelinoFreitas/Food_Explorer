import styled from "styled-components";
import { device } from "../../screensizes/devices";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 114px auto 77px;
  grid-template-areas:
  'header'
  'wrapper'
  'footer';

  .buttonNavigation{
    display: flex;
    align-items: center;

    > p {
      font-weight: 500;
      font-size: 24px;
    }

    border: none;
  }

  .wrapper, .container-wrapper, .box-intern-ingredients, .box-ingredients{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .wrapper{
    grid-area: wrapper;
    width: 100%;
    padding: 16px 32px 32px 32px;
  }

  .container-wrapper{
    gap: 16px;

    > img {
      /* width: fit-content; */
      width: clamp(100px, 100%, 300px);
    }
  }

  .box-intern-ingredients{
    gap: 24px;
    text-align: center;

    h1, p {
      font-family: Poppins;
      line-height: 140%; /* 37.858px */
      font-style: normal;
    }

    > h1 {
      font-size: 28px;
      font-weight: 500;
    }

    > p {
      font-size: 16px;
      font-weight: 100;
    }
  }

  .box-ingredients{
    gap: 48px;
  }

  .dish-select-box{
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .dish-insert{
    padding: 0 24px;

    font-size: 14px;
    font-weight: 500;
  }

  .dish-stepper{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;

    margin-bottom: 16px;
  }

  footer{
    grid-area: footer;
    margin: 0;
  }

  @media ${device.tablet} {

    .container-wrapper{
      gap: 48px;

      > img {
        width: clamp(200px, 100%, 400px);
      }
    }
    .container-wrapper{
      flex-direction: row;
      justify-content: center;
      height: 100%;
    }

    .box-ingredients{
      width: 50%;
    }

    .box-intern-ingredients{
      align-items: start;

      > h1 {
        font-size: clamp(28px, 3vw, 40px);
      }

      > p {
        font-size: clamp(16px, 2vw, 24px);;
        font-weight: 300;
        text-align: left;
      }
    }

    .ingredients{
      justify-content: left;
      display: flex;
    }

    .dish-select-box{
      justify-content: left;

      .dish-insert{
        width: 200px;
      }
    }

  }

`