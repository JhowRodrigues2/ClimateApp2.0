import { createGlobalStyle } from "styled-components";
import BackgroundImagem from "../assets/bg.jpeg"

const GlobalStyle = createGlobalStyle`
:root{
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;
}
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    min-height: 100vh;
    background: url(${BackgroundImagem});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
    
     
  
`;

export default GlobalStyle;
