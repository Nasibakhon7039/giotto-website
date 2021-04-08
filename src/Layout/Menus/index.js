import React from "react";
import { MenuContainer, ProductsWrapper } from "./MenuElements";
import { Row, Col, Nav, Tab, Card, CardDeck, Button } from "react-bootstrap";

const Menus = ({ data }) => {
  return (
    <>
      <MenuContainer>
        <h1>Меню</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className="mt-3">
                  <Nav.Link eventKey="first">Мороженое</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Вафли Брюсельские</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Фондю/Топпинг</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Пирожные</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Выпечка</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">Молочные коктейли</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">
                    Прохладительные напитки
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="eighth">Свежевыжатые соки</Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-3">
                  <Nav.Link eventKey="ninth">Кофе</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <ProductsWrapper>
                    {data.map((product) => {
                      return (
                        <CardDeck>
                          <Card
                            style={{ width: "16rem" }}
                            className="mr-5 mb-4 card-shadow"
                          >
                            <Card.Img
                              variant="top"
                              src={product.img}
                              alt={product.alt}
                            />
                            <Card.Body>
                              <Card.Title class="h6">{product.name}</Card.Title>
                              <Card.Text>{product.desc}</Card.Text>
                              <Card.Text className="mt-5 footer-card">
                                <b>
                                  <p>{product.price}</p>
                                </b>
                                <Button className="btn" size="sm">
                                  {product.button}
                                </Button>
                              </Card.Text>
                            </Card.Body>
                          </Card>
                        </CardDeck>
                      );
                    })}
                  </ProductsWrapper>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="sixth">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="seventh">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="eighth">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="ninth">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </MenuContainer>
    </>
  );
};

export default Menus;
