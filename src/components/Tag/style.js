import { styled } from "styled-components";

export const Container = styled.div`
  padding: 4px 8px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  text-align: center;

  background-color: ${({theme}) => theme.COLORS.DARK_1000};
`