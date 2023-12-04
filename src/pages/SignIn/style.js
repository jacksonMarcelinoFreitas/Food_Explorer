import { device } from "../../screensizes/devices";
import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0px 64px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .wrapper, .box-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    width: 100%;
    height: 100%;
  }

  .box-wrapper{
    height: fit-content;
  }

  .wrapper{
    flex-direction: column;
    gap: 72px;
  }

  .hidden{
    display: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  @media ${device.tablet} {
    .box-wrapper{
      width: 80%;
    }
  }

  @media ${device.desktopSmall} {
    .wrapper{
      width: 100%;
      flex-direction: row;
      justify-content: space-evenly;
    }

    .box-wrapper{
      padding: 64px;

      background: ${({theme}) => theme.COLORS.DARK_700};
      border-radius: 16px;

      width: 50%;
    }

    .hidden{
      display: inline;
    }
  }

  @media ${device.desktopMiddle} {
    .box-wrapper{
      width: 30%;
    }
  }


`
