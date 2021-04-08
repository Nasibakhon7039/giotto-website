import styled from "styled-components";

export const NewsContainer = styled.div`
  margin: 80px 50px;

  @media screen and (max-width: 600px) {
    margin: 60px 40px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

export const CardContent = styled.div`
  margin-bottom: 2rem;
`;

export const CardImage = styled.div`
  margin-bottom: 10px;
`;

export const CardBody = styled.div`
  padding: 10px;
`;
