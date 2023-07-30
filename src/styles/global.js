import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.COLORS.DARK_400};
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