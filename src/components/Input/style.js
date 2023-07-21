import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 14px;

  width: 100%;
  border-radius: 8px;

  background-color: ${({theme}) => theme.COLORS.DARK_900};
  color: ${({theme}) => theme.COLORS.LIGHT_500};

  &:placeholder{
    color: ${({theme}) => theme.COLORS.LIGHT_500};
  }

  > input{
    width: 100%;
    height: 48px;

    padding: 12px 14px;

    border: none;

    background: none;
  }

  > svg{

  }
`