import styled from "styled-components";

export const ContactPageContainer = styled.div`
  margin: 80px 60px;

  p {
    font-size: 16px;

    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  @media screen and (max-width: 600px) {
    margin: 60px 40px;
  }

  .social-media {
    display: flex;
    width: 70%;
    justify-content: center;

    @media screen and (max-width: 600px) {
      justify-content: start;
    }

    .icon-circle {
      flex: 0 0 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      border-radius: 50%;
      transition: 0.3s all ease-in-out;

      &:hover {
        background: rgba(0, 0, 0, 0.2);
      }

      .fa {
        font-size: 23px;
        color: black;

        @media screen and (max-width: 600px) {
          font-size: 16px;
        }
      }
    }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-bottom: 3rem;
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 24px;
  margin-right: 1rem;
`;
