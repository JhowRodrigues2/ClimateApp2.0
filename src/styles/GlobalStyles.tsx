import styled, { createGlobalStyle } from "styled-components";
import BackgroundImagem from "../assets/bg.jpeg"

const GlobalStyle = createGlobalStyle`
:root{
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;
}
  body {
    margin: 0;
    padding: 0;
    
}
section{
    background:#6D67D0;
    backdrop-filter: blur(1rem);
    border-radius: 1rem;
    
   } 
       
  
`
export const AppContainer = styled.main`
    font-size: 1.6rem;
    min-height: 100vh;
    background: url(${BackgroundImagem});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: grid;
`;

export default GlobalStyle;
