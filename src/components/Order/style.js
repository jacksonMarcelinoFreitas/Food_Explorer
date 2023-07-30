import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  width: 20px;

  border-radius: 50%;

  position: absolute;
  top: -10px;
  right: -10px;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
`;