import styled from 'styled-components';
import { device } from '../../screensizes/devices';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 114px auto 77px;
  grid-template-areas:
  'header'
  'form'
  'footer';

  .wrapper{
    width: 100%;
    padding: 0 32px;

    grid-area: form;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container-wrapper{
    width: 100%;
  }

  .buttonNavigation{
    margin: 40px 0 24px 0px;

    display: flex;
    align-items: center;
    padding: 0;

    > p {
      font-weight: 500;
      font-size: 24px;
    }

    border: none;
  }

  @media ${device.mobileLarge} {
    .container-wrapper{
      width: 90%;
    }
  }

  @media ${device.tablet} {
    .container-wrapper{
      width: 80%;
    }
  }

  @media ${device.desktopSmall} {
    .container-wrapper{
      width: 70%;
    }
    .box-input{
      width: 100%;
    }

    .layout-desktop{
      display: flex;
      gap: 32px;
    }

    .button-save{
      width: fit-content;
    }

    .button-delete{
      width: fit-content;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin-bottom: 32px;

  h1{
    font-family: 'poppins', sans-serif;
    font-size: 32px;
    font-weight: 500;
  }

  .label{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }

  .box-input{
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .box-ingredients{
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 16px;

    grid-template-columns: 1fr 1fr;

    padding: 8px;

    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.DARK_800};
  }

  .upload-image{
    width: 100%;
    height: 48px;

    padding: 12px 32px;

    display: flex;
    align-items: center;
    justify-content: left;
    gap: 8px;

    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.DARK_800};

    input{
      display: none;
    };

    span{
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
    }
  }

  .button-save{
    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
  }

  .button-delete{
    background-color: ${({theme}) => theme.COLORS.DARK_800};
  }

  .box-button{
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 32px;
  }

`