import styled from "styled-components";
import { device } from "../../screensizes/devices";
import { Splide } from '@splidejs/react-splide';

export const StyledSplide = styled(Splide)`
  padding: 0;
  width: 100%;
  
  .splide__arrow--prev,
  .splide__arrow--next{
    z-index: 3;
    color: white;
    display: none;
  }

  @media ${device.tablet}{
    .splide__arrow--prev,
    .splide__arrow--next{
      display: inherit;
    }
  }
`;
 

export const CommonStyle = styled.div`
  display: none;

  width: 80px;
  height: 100%;

  position: absolute;
  z-index: 1;
  top: 0;

  @media ${device.tablet}{
    display: inherit;
  }
`;


export const Left = styled(CommonStyle)`
    left: 0;
    background-image: linear-gradient(to right, rgba(0,0,0,.7) 20%, rgba(0,0,0,0) );
`;

export const Right = styled(CommonStyle)`
    right: 0;
    background-image: linear-gradient(to left, rgba(0,0,0,.7) 20%, rgba(0,0,0,0) );
`;