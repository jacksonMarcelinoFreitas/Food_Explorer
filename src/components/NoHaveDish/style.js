import { device } from "../../screensizes/devices";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 2px solid rgba(255,255,255,.1);
  
  img{
    min-width: 100px;
    max-width: 200px;
    color: black;
  }

  @media ${device.tablet}{
    img{
      min-width: 350px;
    }
  }
`