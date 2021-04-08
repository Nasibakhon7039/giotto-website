import styled from "styled-components";
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
    background: #100966;
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
