import { styled } from "styled-components";
import { device } from "../../screensizes/devices";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 24px;
  margin-right: 10vw;

  grid-area: areaCard;
  /* overflow-x: hidden; */

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

    gap: 16px;

  }

  @media ${device.tablet}{
      .title-area{
        font-size: 32px;
        font-weight: 400;
      }
  }

`