import styled, { createGlobalStyle } from "styled-components";
import BackgroundImagem from "../assets/bg.jpeg";

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
;
}
section{
    background:#6D67D0;
    backdrop-filter: blur(1rem);
    border-radius: 1rem;
   } 
`;

export const AppContainer = styled.main`
  min-width: 100%;
  min-height: 100vh;
  background: url(${BackgroundImagem}) no-repeat center/cover;

  display: flex;
  padding: 6.4rem;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
  @media (max-width: 590px) {
    padding-right: 2.4rem;
    padding-left: 2.4rem;

  }
`;

export default GlobalStyle;
