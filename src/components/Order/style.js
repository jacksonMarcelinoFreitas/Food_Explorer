import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  border-radius: 50%;

  position: absolute;
  top: -10px;
  right: -10px;

  background-color: ${({theme}) => theme.COLORS.TOMATO_200};
`;