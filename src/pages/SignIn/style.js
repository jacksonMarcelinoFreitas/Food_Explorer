import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${({theme})=> theme.COLORS.white};
  color: white;

  .input-wrapper{
    display: flex;
    justify-content: left;
    flex-direction: column;
    gap: 8px;

    margin-bottom: 32px;

    width: 100%;
  }

  .brand{
    margin-bottom: 72px;
  }

  .button{
    margin-bottom: 32px;
  }
`