import styled, { createGlobalStyle } from "styled-components";
import BackgroundImagem from "../assets/bg.jpeg"

const GlobalStyle = createGlobalStyle`
:root{
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-size: 1.6rem;
}

section{
    background:#6D67D0;
    backdrop-filter: blur(1rem);
    border-radius: 1rem;
   } 

`
export const AppContainer = styled.main`
    min-height: 100vh;
    background: url(${BackgroundImagem})no-repeat center/cover;
    display: grid;
    place-content: center;
    padding: 6.4rem;
    gap: 2.4rem;
    @media (min-width: 1200px) {
    grid-template-columns: 48rem 48rem;
    grid-template-rows: 24.4rem 24.4rem;
  }

`;

export default GlobalStyle;
