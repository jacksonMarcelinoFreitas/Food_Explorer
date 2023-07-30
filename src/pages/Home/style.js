import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  .banner {
    display: flex;
    align-items: end;
    justify-content: center;

    background-image: linear-gradient(to bottom, ${({theme}) => theme.COLORS.DARK_900}, ${({theme}) => theme.COLORS.DARK_200});

    height: 120px;
    width: 90%;

    > img {
      width: 191px;
    }

    > p {
      font-size: 12px;
      font-family: 'Poppins', sans-serif;

      > span{
        font-size: 18px;
        font-weight: 500;

        display: block;
      }
    }
  }
`