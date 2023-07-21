import { styled } from "styled-components";

export const Container = styled.button`
  height: 48px;
  width: 100%;

  border-radius: 8px;
  border: none;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
`