import { device } from "../../screensizes/devices";
import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 32px;

  width: 100%;
  height: 114px;

  padding: 56px 28px 24px 28px;

  background-color: ${({theme}) => theme.COLORS.DARK_700};

  .input-search{
    input::placeholder {
      text-align: center;
    }
  }

  .box-search-brand{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    width: 100%;
  }

  .brand{
    display: flex;
    align-items: center;
    gap: 8px;

    > span {
      color: ${({theme}) => theme.COLORS.CAKE_200};
    }
  }

  .iconMenu{
    width: 24px;
    height: 24px;

    > svg{
      color: ${({theme}) => theme.COLORS.LIGHT_100};
      width: fit-content;
    }
  }

  .iconOrder{
    width: 24px;
    height: 24px;
    position: relative;
  }

  .orderButton{
    width: 216px;
    display: none;
  }

  .desktop{
    display: none;
  }


  .iconBrand{
    width: 24px;
  }

  .iconOrder:hover, 
  .iconLogout:hover{
    cursor: pointer;
  }

  .textBrand{
    font-size: 21px;
  }

  @media ${device.desktopSmall}{
    .desktop{
      display: inherit;
    }
    .mobile{
      display: none;
    }

    .brand{
      flex-direction: column;
      align-items: end;
      gap: 0;
    }
  }




`
