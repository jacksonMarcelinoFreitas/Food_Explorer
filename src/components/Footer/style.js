import { styled } from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 100%;
  height: 76px;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 100;

  /* position: static; */
  position: sticky;

  margin-top: 24px;

  .brand{
    width: fit-content;

    > img{
      width: 22px;
      filter: hue-rotate(20deg);
      filter: saturate(10%);
    }

    > p {
      font-size: 16px;
      color: ${({theme}) => theme.COLORS.LIGHT_700};
    }
  }
`