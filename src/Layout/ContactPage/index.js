import React from "react";
import { ContactPageContainer } from "./ContactElements";
import { Row, Col } from "react-bootstrap";
import location from "../../Images/location1.jpg";

const ContactPage = () => {
  return (
    <>
      <ContactPageContainer>
        <h1>Контакты</h1>
        <Row className="mb-5">
          <Col>
            <h3>Номера</h3>
            <p>+998 71 234 96 65</p>
            <p>+998 71 141 04 04</p>
          </Col>
          <Col>
            <h3>Часы работы</h3>
            <p>С 10:00 до 23:00</p>
          </Col>
          <Col>
            <h3>Социальные сети</h3>
            <div className="social-media">
              <a
                href="https://www.facebook.com/giotto.uz/"
                className="icon-circle"
              >
                <i class="fa fa-facebook-official" aria-hidden="true"></i>
              </a>
              <a href="https://t.me/giottoilgelato" className="icon-circle">
                <i class="fa fa-telegram" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.instagram.com/giotto.uz/?hl=ru"
                className="icon-circle"
              >
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="/" className="icon-circle">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h3>Локации</h3>
            <p>
              г. Ташкент, Юнусабадский район, Ц5, проспект А.Темура, ул.
              Х.Эргашева.
            </p>
            <p>
              г. Ташкент , Мирзо-Улугбекский район, Ц1, ул. Шахрисабз, дом 33 А.
            </p>
            <p>г. Ташкент, Яккасарайский район, улица Махмуда Тараби, 29</p>
          </Col>
          <Col md={8}>
            <img src={location} width="640px" height="350px" />
          </Col>
        </Row>
      </ContactPageContainer>
    </>
  );
};

export default ContactPage;
