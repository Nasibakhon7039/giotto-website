import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  width: 100vw;
  padding: 4rem;

  h1 {
    text-align: center;
    font-size: 3rem;
  }
  p.sub-title {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 50px;
  }

  #contact-container {
    display: grid;
    grid-template-columns: 33% 68%;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    padding: 10px;
    background: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
    -webkit-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.4);
    -mox-box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.4);
    -box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.4);
  }

  .contact-info {
    grid-column: 1 / 2;
    background-color: #100966;
    border-radius: 15px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    color: white;

    @media screen and (max-width: 900px) {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
      padding: 30px 25px;
    }

    h4 {
      font-size: 2rem;
      font-weight: 500;
      margin: 0;
      color: white;

      @media screen and (max-width: 600px) {
        font-size: 16px;
      }
    }
    p {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.7);
      font-weight: 300;
      margin-bottom: 2rem;

      @media screen and (max-width: 600px) {
        font-size: 10px;
      }
    }
  }

  .icon-text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2rem;

    @media screen and (max-width: 600px) {
      font-size: 12px;
    }

    .fa {
      font-size: 1.6rem;
      margin-right: 2rem;
      flex: 0 0 20px;

      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
    span {
      font-size: 1.3rem;
      font-weight: 300;

      @media screen and (max-width: 600px) {
        font-size: 10px;
      }
    }
  }

  .social-media {
    display: flex;
    width: 50%;
    justify-content: space-between;

    .icon-circle {
      flex: 0 0 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      border-radius: 50%;
      transition: 0.3s all ease-in-out;

      &:hover {
        background: rgba(255, 255, 255, 0.7);
      }

      .fa {
        font-size: 20px;
        color: white;

        @media screen and (max-width: 600px) {
          font-size: 15px;
        }
      }
    }
  }

  form {
    grid-column: 2 / 3;
    padding: 40px;

    @media screen and (max-width: 900px) {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      padding: 20px 15px;
    }

    .column2 {
      display: flex;
      width: 100%;
      flex: 0 0 100%;
    }

    .form-group {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      flex: 0 1 100%;
      padding-right: 40px;
      padding: 0;

      label {
        font-size: 1rem;
        //color: rgba(255, 255, 255, 0.8);
        margin-bottom: 1rem;
      }

      input[type="text"],
      input[type="tel"],
      input[type="email"],
      textarea {
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 10px;
        font-size: 1rem;
        font-weight: 300;
        border-bottom: 1px solid rgba(0, 0, 0, 0.3);
        transition: 0.3s all ease-in-out;
        margin-bottom: 2rem;

        &:focus {
          border: none;
          border-bottom: 1px solid #100966;
          outline: none;
        }
      }

      &:nth-child(2) {
        padding-right: 0;
      }

      &.solo {
        padding: 0;
      }
      &.right {
        align-items: flex-end;
      }
      button {
        width: 200px;
        height: 50px;
        cursor: pointer;
        background: #100966;
        color: white;
        border: none;
        text-transform: uppercase;
        border-radius: 10px;
        transition: 0.2s ease-out;
        @media screen and (max-width: 600px) {
          width: 100%;
        }

        &:hover {
          transform: scale(1.1) perspective(1px);
          transition: 0.2s ease-out;
        }
      }
    }
  }
`;
