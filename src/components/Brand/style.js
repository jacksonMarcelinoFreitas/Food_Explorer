import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  
  cursor: pointer;

  img{
    width: clamp(36px, 5vw, 42px);
  }

  p{
    font-family: 'Roboto', sans-serif;
    font-size: clamp(32px, 5vw, 36px);
    font-weight: 700;
    white-space: nowrap;
  }

`