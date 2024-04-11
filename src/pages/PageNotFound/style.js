import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: hidden;

  .wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;
    gap: 64px;

    img{
      width: clamp(200px, 70vw, 500px);
      opacity: .6;
      filter: grayscale(.3);
    }

    button{
      width: clamp(100px, 50vw, 200px);

      p{
        font-size: clamp(12px, 5vw, 16px);
      }
    }
  }

  footer{
    position: fixed;
    bottom: 0;
  }

`