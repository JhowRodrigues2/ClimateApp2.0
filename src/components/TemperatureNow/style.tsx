import styled from "styled-components";
import BgTempNow from "../../assets/bg-temp-now.jpeg";
import Clouds from "../../assets/clouds.svg"

export const TemperatureNowContainer = styled.section`
  width: 48rem;
  height: 48rem;
  background: url(${BgTempNow});
  position: relative;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  &::before {
    position: absolute;
    content: "";
    width: 17.6rem;
    height: 17.6rem;
    background: url(${Clouds});
    background-repeat: no-repeat;
    top:-5.6rem;
    left: -5.6rem;
  }
  @media (min-width: 1200px) {
    grid-row: 1/2;
  }
`;
export const SearchContainer = styled.div`
height: 4rem;
display: flex;
align-items: center;
justify-content: center;
input{
  padding: 0.3rem;
  width: 44%;
  height:2rem;
  font-family: 'Lato', sans-serif;
  box-shadow: 0 1px 3px rgba(221, 211, 211, 0.12), 0 1px 2px rgba(221, 211, 211, 0.12);
  border: solid 1px #dad8f7;
  background: transparent;
  border-radius: 0.5rem;
  color:#dad8f7;
  text-align: center;
  outline: 0;
  font-size: 1.4rem;
  &::placeholder {
  color: #dad8f7;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
}
}

button{ 
  margin-left: 0.3rem;
  width: 2rem;
  height:2rem;  
  border-radius: 0.5rem;
  background: rgba(80, 73, 223, 0.8);
  border: none;
  cursor: pointer;
  color:#fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

`

export const ErrorMessage = styled.span`
text-align: center;
width: 100%;


`
  

export const Location = styled.div`
display: flex;
align-items: center;
justify-self: end;
padding: 3.2rem 3.2rem 0;
gap: .4rem;
    strong{
        font-size: 1.4rem;
    color:#C2BFF4;
    }
`;

export const Temp = styled.div`
margin:6rem;
font-weight: 700;
display: flex;
justify-content: center;
span{
font-size: 2rem;
color:#dad8f7;
margin-top: 1.5rem;
}
`;
export const Forecast = styled.div`
text-align:center;
font-size:8.8rem;
text-align: center;
color:#fff;
display:flex;
flex-direction: column;
gap:0.4rem;

`;
export const WeatherDescrption = styled.div`
font-size: 2rem ;
`
export const WeatherCloudsIcon = styled.span`
img{
  margin-left: 0.5rem;
  width: 2rem;
  height: 2rem;
}

`
