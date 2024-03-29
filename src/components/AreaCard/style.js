import { styled } from "styled-components";
import { device } from "../../screensizes/devices";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 46px;
  
  grid-area: areaCard;
  
  .title-area{
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    
    margin-bottom: 24px;
  }

  .area-cards{
    overflow-x: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media ${device.tablet}{
      .title-area{
        font-size: 32px;
        font-weight: 400;
      }
  }

`