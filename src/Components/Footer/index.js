import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  SocialLogo,
  SocialIconLink,
  SocialIcons,
  FooterLinks,
  Styles,
} from "./FooterElements";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../../Pages/Home";
import Menu from "../../Pages/Menu";
import About from "../../Pages/About";
import News from "../../Pages/News";
import Contacts from "../../Pages/Contacts";

const Footer = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/giotto-website" component={Home} exact />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/about" component={About} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
      </Router>
      <Styles>
        <FooterContainer>
          <div>
            <SocialLogo to="/">Giotto</SocialLogo>
          </div>
          <FooterLinks>
            <Link className="mr-5" to="/">
              Главная
            </Link>
            <Link className="mr-5" to="/menu">
              Меню
            </Link>
            <Link className="mr-5" to="/about">
              О нас
            </Link>
            <Link className="mr-5" to="/news">
              Новости
            </Link>
            <Link to="/contacts">Контакты</Link>
          </FooterLinks>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/giotto.uz/"
              target="_blank"
              aria-label="Facebook"
              rel="nooper noreferrer"
            >
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="https://t.me/giottoilgelato"
              target="_blank"
              aria-label="Telegram"
              rel="nooper noreferrer"
            >
              <FaTelegram />
            </SocialIconLink>
            <SocialIconLink
              href="https://www.instagram.com/giotto.uz/?hl=ru"
              target="_blank"
              aria-label="Instagram"
              rel="nooper noreferrer"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Twitter"
              rel="nooper noreferrer"
              className="mr-0"
            >
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </FooterContainer>
      </Styles>
    </>
  );
};

export default Footer;
