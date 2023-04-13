import styled from "styled-components";

export const StatisticsContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  gap: 0.8rem;
`;
export const ItemsStats = styled.div`
  flex: 1;

  padding: 1.2rem 1.6rem;
  background: rgba(102, 96, 200, 0.6);
  border-radius: 0.6rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;
  img {
    width: 4rem;
    height: 4rem;
  }
`;
export const Info = styled.div`
color: #e7e6fb;
span, p {
    font-size: 1.2rem;
}

h5 {
  margin: 0;
  font-size: 1.8rem;
  display: flex;
  align-items: baseline;
  gap: 0.4rem;  
}
`;
