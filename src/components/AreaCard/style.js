import { styled } from "styled-components";

export const Container = styled.div`
  padding: 0 0 0 24px;
  margin-bottom: 24px;

  > .title-area{
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;

    margin-bottom: 24px;
  }

  .area-cards{
    overflow-x: scroll;

    padding: 0 24px 0 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 16px;
  }
`