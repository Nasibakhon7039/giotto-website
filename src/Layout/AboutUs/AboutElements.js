import styled from "styled-components";

export const AboutImage = styled.div`
  background-position: center;
  top: 0;
  left: 0;
`;

export const AboutContainer = styled.div`
  margin: 80px 60px;

  font-family: "Inter", sans-serif;

  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    margin: 60px 40px;
  }
`;
