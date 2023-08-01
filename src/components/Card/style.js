import { styled } from "styled-components";

export const Container = styled.div`
  width: 210px;
  height: 292px;

  padding: 24px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  background-color: ${({theme}) => theme.COLORS.DARK_900};

  .dish-name{
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

  .dish-price{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  .dish-like{
    position: absolute;
    /* color: red; */
    right: 16px;
    top: 16px;
  }

  .image-dish{
    width: 88px;

    > img{
      width: 100%;
    }
  }

  .dish-select-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .dish-insert{
    height: 32px;
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

`