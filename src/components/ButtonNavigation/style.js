import { styled } from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 10px;

  background: none;
  border: none;

  border-bottom: 1.5px solid ${({theme}) => theme.COLORS.DARK_1000};

  display: block;

  > .icon, p{
    display: flex;
    align-items: center;
  }

  > p {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 140%; /* 33.6px */

    text-align: left;
  }


`