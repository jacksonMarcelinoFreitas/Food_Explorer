import { styled } from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  width: 100%;
  height: 76px;
  padding: 0 28px;

  background-color: ${({theme}) => theme.COLORS.DARK_600};

  font-size: clamp(10px, 2vw, 12px);
  font-family: 'Poppins', sans-serif;
  font-weight: 100;

  position: sticky;

  .brand{
    width: fit-content;

    > img{
      width: clamp(12px, 2vw, 22px);
      filter: hue-rotate(20deg);
      filter: saturate(10%);
    }

    > p {
      font-size: clamp(12px, 2vw, 22px);
      color: ${({theme}) => theme.COLORS.LIGHT_700};
    }
  }
`