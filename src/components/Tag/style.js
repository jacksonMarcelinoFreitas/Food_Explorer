import { styled } from "styled-components";

export const Container = styled.div`
  padding: 4px 8px;

  border-radius: 6px;

  font-family: 'Poppins', sans-serif;
  font-size: clamp(12px, 2vw, 14px);
  font-weight: 500;
  text-align: center;

  background-color: ${({theme}) => theme.COLORS.DARK_1000};
`