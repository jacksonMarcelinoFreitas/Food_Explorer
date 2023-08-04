import { styled } from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  resize: none;

  padding: 14px;

  border: none;
  border-radius: 8px;

  background-color: ${({theme}) => theme.COLORS.DARK_800};

  ::placeholder{
    color: ${({theme}) => theme.COLORS.LIGHT_500};
  }

`