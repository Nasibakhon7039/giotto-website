import styled from "styled-components";
import ImgBg from "../../Images/back.png";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";

export const Styles = styled.div`
  a,
  .nav-link {
    font-size: 20px;
    color: white;
    margin-right: 15px;
    &:hover {
      opacity: 0.7;
      text-decoration: none;
    }
  }

  .nav-back {
    background: transparent;
  }

  .container {
    padding-right: 0;
    padding-left: 0;
    margin-right: 40px;
    margin-left: 40px;
  }
`;

export const NavIcon = styled.div`
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  color: white;
  margin-right: 15px;
  &:hover {
    opacity: 0.7;
  }
`;

export const User = styled(AiOutlineUser)`
  font-size: 25px;
`;

export const Cart = styled(AiOutlineShoppingCart)`
  font-size: 25px;
`;

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 700px;
  background-position: center;
  background-size: cover;
  margin-bottom: 100px;
  position: relative;

  .modal-body {
    padding: 1rem 5rem;
  }
`;

export const HeroContent = styled.div`
  height: calc(100vh -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 85vw;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: clamp(15px, 35px, 60px);
  //margin-bottom: 1rem;
  //box-shadow: 3px 5px #100966;
  letter-spacing: 1.5px;
  //margin-bottom: 2rem;
  line-height: 3rem;
  color: white;
  position: absolute;
  bottom: 20%;
  left: 6%;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  border-radius: 10px;
  background: #100966;
  color: #fff;
  transition: 0.2s ease-out;
  position: absolute;
  left: 6%;
  bottom: 10%;
  &:hover {
    transition: 0.2s ease-out;
    cursor: pointer;
    transform: scale(1.1) perspective(1px);
  }
`;
