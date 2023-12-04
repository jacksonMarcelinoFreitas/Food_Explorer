import styled from "styled-components";
import { Swiper } from 'swiper/react';
import { device } from "../../screensizes/devices";

export const StyledSwiper = styled(Swiper)`
  position: relative;

  .swiper-card-wrapper {
    position: relative;
    z-index: 1;
  }

  .swiper-button-prev,
  .swiper-button-next {
    z-index: 3;
    color: white;
    display: none;
  }

  @media ${device.tablet}{
    .swiper-button-prev,
    .swiper-button-next {
      display: inherit;
    }
  }
`;

export const CommonStyle = styled.div`
  display: none;

  position: absolute;
  z-index: 2;
  top: 0;


  width: 200px;
  height: 100%;

  @media ${device.tablet}{
    display: inherit;
  }
`;


export const Left = styled(CommonStyle)`
    left: 0;

    background-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
`;

export const Right = styled(CommonStyle)`
    right: 0;

    background-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0));
`;