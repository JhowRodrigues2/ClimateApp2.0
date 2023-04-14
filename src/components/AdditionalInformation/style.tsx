import styled from "styled-components";

export const AditionalInformationContainer = styled.section`
  width: 48rem;
  height: 48rem;
  position: relative;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  @media (min-width: 1200px) {
    grid-row: 1/2;
  }
`
export const WeatherImagem = styled.div`
padding: 1rem;

img{
  width: 100%;
  height: 38.2rem;
}
`