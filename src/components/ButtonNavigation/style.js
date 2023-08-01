import { styled } from "styled-components";

export const Container = styled.button`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 100;
  text-align: left;

  width: 100%;
  padding: 10px;

  background: none;
  border: none;

  border-bottom: 1.5px solid ${({theme}) => theme.COLORS.DARK_1000};

  display: block;

  > .icon{
    display: flex;
    align-items: center;
  }

  > p {
    display: inline;
  }


`