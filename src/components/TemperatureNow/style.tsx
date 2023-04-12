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
`;


export const Location = styled.div`
display: flex;
align-items: center;
justify-self: end;
padding: 3.2rem 3.2rem 0;
gap: 0.4rem;
    strong{
        font-size: 1.4rem;
    color:#C2BFF4;
    }
`;
export const Temp = styled.div``;
export const Statistics = styled.div``;
export const Info = styled.div``;
