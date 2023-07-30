import { styled } from "styled-components";

export const Container = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 100;
  text-align: left;

  background: none;
  border: none;

  border-bottom: 1.5px solid ${({theme}) => theme.COLORS.DARK_1000};

  display: block;

  padding: 10px;
`