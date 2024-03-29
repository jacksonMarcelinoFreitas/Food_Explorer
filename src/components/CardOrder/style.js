import { device } from '../../screensizes/devices';
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: left;
  gap: 16px;

  padding: 16px 24px;

  background-color: ${({theme}) => theme.COLORS.DARK_400};
  border-radius: 12px ;

  .image-dish{
    width: 72px;
  }

  p{
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 20px;

    span{
      padding-left: 10px;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 12px;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

  }
  
  button{
    background-color: transparent;

    display: block;
    width: fit-content;
    height: fit-content;
    padding: 8px 0;

    P{
      color: ${({theme}) => theme.COLORS.TOMATO_400};
      font-size: 16px;
      font-weight: 600;
      font-family:'Roboto', sans-serif;
    }
  }

  @media ${device.tablet} {
    height: fit-content;
  }

`
