import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: 114px auto 76px;
  grid-template-areas:
  'header'
  'menu'
  'footer';

  width: 100%;
  height: 100vh;
  /* overflow: hidden; */

  header{
    display: flex;
    justify-content: left;

    grid-area: header;

    background: ${({theme}) => theme.COLORS.DARK_700};
    width: 100%;
    padding: 56px 28px 24px 28px;
  }

  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wrapper-menu{
    grid-area: menu;

    width: 100%;
    padding: 28px 36px 14px 28px
  }

`

export const ButtonCloseMenu = styled.button`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 16px;

  background: none;
  border: none;

  padding: 4px 0;

  fill: white;
`
