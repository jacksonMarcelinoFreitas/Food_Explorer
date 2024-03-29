import { styled } from "styled-components";
import { device } from "../../screensizes/devices";

export const Container = styled.div`
  position: relative;

  height: 292px;
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;

  border-radius: 16px;

  background-color: ${({theme}) => theme.COLORS.DARK_900};

  .hidden{
    display: none;
  }

  .dish-name{
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }

  .dish-price{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;

    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  .dish-description{
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }

  .dish-like, .edit-icon{
    position: absolute;
    right: 16px;
    top: 16px;

    &:hover{
      cursor: pointer
    }
  }

  .image-dish{
    width: 88px;
    cursor: pointer;

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

  @media ${device.desktopSmall} {
    height: 462px;
    padding: 32px;

    .hidden{
      display: inherit;
    }

    .dish-name{
      font-size: 24px;
      font-weight: bold;
    }

    .dish-price{
      font-size: 32px;

    }

    .dish-description{
      font-size: 14px;
      font-weight: 400;

      color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    .image-dish{
      width: 176px;
    }

    .dish-select-box{
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 16px;
    }

    .dish-insert{
      padding: 24px 16px;
    }

    .dish-stepper{
      gap: 16px;
    }

  }

`