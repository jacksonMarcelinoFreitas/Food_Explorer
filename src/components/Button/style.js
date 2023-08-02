import { styled } from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 48px;
  width: 100%;

  border-radius: 8px;
  border: none;

  background-color: ${({theme}) => theme.COLORS.TOMATO_100};

  > .icon{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > p {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
  }

`