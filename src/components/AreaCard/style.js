import { styled } from "styled-components";

export const Container = styled.div`
  padding: 0 0 0 24px;

  .title-area{
    font-family: 'Poppins' sans-serif;
    font-size: 18px;
    font-weight: 500;

    margin-bottom: 24px;
  }

  .area-cards{
    overflow-x: scroll;

    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 16px;
  }
`