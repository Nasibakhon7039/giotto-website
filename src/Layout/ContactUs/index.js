import React from "react";
import { ContactContainer } from "./ContactUsElements";

const ContactUs = () => {
  return (
    <>
      <ContactContainer>
        <h1>Свяжитесь с нами</h1>
        <p className="sub-title">
          Не стесняйтесь связываться с нами в любое время. Мы свяжемся с вами,
          как только сможем.
        </p>
        <div id="contact-container">
          <div className="contact-info">
            <h4>Контакты</h4>
            <p>Заполните форму и нажмите отправить</p>
            <div className="icon-text">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>+998 71 234 96 65</span>
            </div>
            <div className="icon-text">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>giottoilgelato@gmail.com</span>
            </div>
            <div className="icon-text">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>Tashkent, Amir Temur Avenue 1</span>
            </div>
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
          </div>
          <form>
            <div className="column2">
              <div className="form-group">
                <label>Имя</label>
                <input type="text" />
              </div>
            </div>
            <div className="column2">
              <div className="form-group">
                <label>Номер телефона</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value="+998"
                />
              </div>
            </div>
            <div className="column2">
              <div className="form-group solo">
                <label>Сообщение</label>
                <textarea></textarea>
              </div>
            </div>
            <div className="column2">
              <div className="form-group solo right">
                <button className="primary">Отправить</button>
              </div>
            </div>
          </form>
        </div>
      </ContactContainer>
    </>
  );
};

export default ContactUs;
