import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body{
    background-color: ${({theme}) => theme.COLORS.BLACK };

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar {
      width: 12px;
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 12px;
      background: ${({theme}) => theme.COLORS.CAKE_100};
    }
  }

  body{
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