import styled from "styled-components";
import { Link } from "react-router-dom";

export const Styles = styled.div`
  a,
  .nav-link {
    color: white;
    margin-right: 15px;
    &:hover {
      opacity: 0.7;
      text-decoration: none;
    }
  }
`;

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 20px;
  font-size: 1rem;
  color: white;
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.7rem;
  display: flex;
  align-items: center;
  padding: 20px;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 100%;
  padding-bottom: 3rem;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  margin-right: 3rem;
`;
