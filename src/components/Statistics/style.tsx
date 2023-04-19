import styled from "styled-components";

export const StatisticsContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  gap: 0.8rem;
`;
export const ItemsStats = styled.div`
    width: 33%;
  padding: 1.2rem 1.6rem;
  background: rgba(80, 73, 223, 0.6);
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  img {
    width: 4rem;
    height: 4rem;
  }
  @media (max-width:590px){
    padding:0.5rem;
  flex-direction: column;
    img {
    width: 2.3rem;
    height: 2.3rem;
  }
  }
`;
export const Info = styled.div`
color: #e7e6fb;

span, p {
    font-size: 1.2rem;
    @media (max-width:450px){
      text-align: center;
      font-size: 1.0rem;
    }
}

h5 {
  margin: 0;
  font-size: 1.8rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.4rem;  
  @media (max-width:450px){

font-size: 1.2rem;
}
}
`;
