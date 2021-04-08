import React from "react";
import {
  NewsContainer,
  CardContent,
  CardImage,
  CardBody,
} from "./NewsElements";
import { Row, Col } from "react-bootstrap";
import news1 from "../../Images/news1.jpg";
import news2 from "../../Images/news2.jpg";
import news3 from "../../Images/news3.jpg";
import news4 from "../../Images/news4.jpg";
import news5 from "../../Images/news5.jpg";
import news6 from "../../Images/news6.jpg";
import news7 from "../../Images/news7.jpg";

const Newss = () => {
  return (
    <>
      <NewsContainer>
        <h1>Новости</h1>
        <Row>
          <Col className="col-md-4">
            <CardContent>
              <CardImage>
                <img src={news1} width="340" height="250" alt="news" />
              </CardImage>
              <CardBody>
                <h3>А вы знали?</h3>
                <p>
                  Мы стали победителями в номинациях: Лучшее кафе! Лучший
                  интерьер заведения! Лучший ресторанный менеджер! Также заняли
                  призовые места в: Открытие года! Лучший официант года! Все эти
                  награды стали нашими исключительно благодаря ВАМ! Мы говорим
                  вам большое, человеческое СПАСИБО за ваши голоса, веру, и за
                  то, что вы с нами!
                </p>
              </CardBody>
            </CardContent>
          </Col>
          <Col className="col-md-4">
            <CardContent>
              <CardImage>
                <img src={news2} width="340" height="250" alt="news" />
              </CardImage>
              <CardBody>
                <h3>Новый филиал</h3>
                <p>
                  Дорогие гости, Мы продолжаем расширяться, и совсем скоро вас
                  ждет самый большой GIOTTO в новом формате! Мы приготовили для
                  вас сюрприз: впервые в Узбекистане, приготовление джелато
                  прямо на глазах у гостей, раз и навсегда в новой точке сети
                  GIOTTO®️ по адресу ул. Абдуллы Каххара. Следите за новостями
                </p>
              </CardBody>
            </CardContent>
          </Col>
          <Col className="col-md-4">
            <CardContent>
              <CardImage>
                <img src={news3} width="340" height="250" alt="news" />
              </CardImage>
              <CardBody>
                <h3>Muzzday2019</h3>
                <p>
                  Долгожданный фестиваль мороженого Muzzday2019 в самом центре
                  столицы уже завтра! 2-3-4 августа вас ждет массовое
                  охлаждение, веселое времяпровождение, и много-много сюрпризов
                  от сети GIOTTO®️! Адрес: ул. Сайилгох, торговый центр
                  «Пойтахт».
                </p>
              </CardBody>
            </CardContent>
          </Col>
          <Col className="col-md-4">
            <CardContent>
              <CardImage>
                <img src={news4} width="340" height="250" alt="news" />
              </CardImage>
              <CardBody>
                <h3>Клара Мишели</h3>
                <p>
                  2 января 2019 года, Клара Мишели - победительница Pizza Master
                  Champion 2018 в Италии весь день будет готовить для вас!
                  Дорогие гости, мы рады пригласить вас отведать изумительную
                  пиццу, а также получить один литр Coca Cola абсолютно
                  бесплатно к каждой пицце!
                </p>
              </CardBody>
            </CardContent>
          </Col>
          <Col className="col-md-4">
            <CardContent>
              <CardImage>
                <img src={news5} width="340" height="250" alt="news" />
              </CardImage>
              <CardBody>
                <h3>Новинка</h3>
                <p>
                  Собравшись в кругу друзей и родных, всегда хочется отведать
                  чего-нибудь необычного, а с наступлением первой осенней
                  прохлады – хочется еще и утеплиться. Представляем вам новинку
                  – швейцарское фондю! Кусочки наших любимых вафель, воздушные
                  зефирки, ломтики ароматных бананов, клубники, и все это
                  окунается в нежнейший молочный шоколад.
                </p>
              </CardBody>
            </CardContent>
          </Col>
          <Col className="col-md-4">
            <CardContent>
              <CardImage>
                <img src={news6} width="340" height="250" alt="news" />
              </CardImage>
              <CardBody>
                <h3>С праздником</h3>
                <p>
                  Поздравляем вас с праздником Курбан-Байрам, дорогие друзья!
                  Желаем счастья и благополучия вам и вашим близким. Пусть дом
                  ваш будет полон света и позитивной энергии
                </p>
              </CardBody>
            </CardContent>
          </Col>
          <Col className="col-md-4">
            <CardContent>
              <CardImage>
                <img src={news7} width="340" height="250" alt="news" />
              </CardImage>
              <CardBody>
                <h3>С Новым Годом</h3>
                <p>
                  Вот и пришла самая волшебная пора - преддверие Нового Года.
                  Все суетятся, ищут подарки, делают покупки к новогоднему
                  застолью, но как успеть все и сразу?! Сеть GIOTTO® предлагает
                  Вам вкусную помощь! Мы запустили эксклюзивную серию новогодних
                  тортов: вишневый брауни, апельсиновый брауни, а также наша
                  абсолютная новинка - мусс на основе манго, маракуйи и ананаса.
                  Спешите сделать заказ: принимаем только до 29 декабря!
                </p>
              </CardBody>
            </CardContent>
          </Col>
        </Row>
      </NewsContainer>
    </>
  );
};

export default Newss;
