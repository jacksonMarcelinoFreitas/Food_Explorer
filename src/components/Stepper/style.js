import { styled } from "styled-components";
import { device } from "../../screensizes/devices";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  @media ${device.desktopSmall}{
    span{
      font-size: 20px;
      font-weight: bold;
    }
  }


`