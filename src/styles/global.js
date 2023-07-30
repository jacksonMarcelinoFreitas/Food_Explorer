import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    width: 100vw;
    height: 100vh;
  }


  body{
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.LIGHT_700 };
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea, a, p{
    color: ${ ({theme}) => theme.COLORS.LIGHT_100};
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
  }

  button:hover , a:hover{
    filter: brightness(0.9);
  }

`;