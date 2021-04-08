import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;

  .footer-card {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }

  span {
    font-size: 1.3rem;
    margin-left: 86.5vw;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 2rem 4rem rgba(12, 12, 12, 0.8);
      background-color: transparent;
    }
  }
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  .btn {
    background: #100966;
    border: none;
  }

  .card-shadow {
    border-radius: 15px;
    border: none;
    -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
    -mox-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
    -box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductsHeading = styled.div`
  h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
  }
`;
