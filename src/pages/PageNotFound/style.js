import styled from 'styled-components';
import { device } from '../../screensizes/devices';

export const Container = styled.div`
  overflow-y: hidden;

  
  .wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;
    gap: 64px;
  }

  img{
    width: 40%;
  }

  button{
    width: 200px;
  }

  footer{
    position: fixed;
    bottom: 0;
  }

  @media ${device.desktopSmall} {
  

  }
`