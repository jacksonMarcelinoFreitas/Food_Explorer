import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 114px auto 76px;
  grid-template-areas:
  'header'
  'dish'
  'footer';

  header{
    grid-area: header;
  }

  .buttonNavigation{
    display: flex;
    align-items: center;

    > p {
      font-weight: 500;
      font-size: 24px;
    }

    border: none;
  }

  .dish-box, .box-intern-ingredients, .box-ingredients{
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .dish-box{
    margin: 48px 56px;

    grid-area: dish;
    align-self: center;

    gap: 16px;

    > img {
      min-width: 264px;
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

`