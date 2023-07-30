import { styled } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 114px;

  padding: 56px 28px 24px 28px;

  background-color: ${({theme}) => theme.COLORS.DARK_700};

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

    > img{
      width: fit-content;
      height: auto;
    }
  }

  .iconBrand{
    width: 24px;
  }

  .textBrand{
    font-size: 21px;
  }

`
