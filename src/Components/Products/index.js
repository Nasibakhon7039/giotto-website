import React from "react";
import { CardDeck } from "react-bootstrap";
import {
  ProductsContainer,
  ProductsWrapper,
  ProductsHeading,
} from "./ProductsElements";
import { Card, Button } from "react-bootstrap";

const Products = ({ data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading className="heading">
        <h1>Выбери свой любимый вкус</h1>
      </ProductsHeading>
      <span>Ещё &rarr;</span>
      <ProductsWrapper>
        {data.map((product) => {
          return (
            <CardDeck>
              <Card style={{ width: "16rem" }} className="m-4 card-shadow">
                <Card.Img variant="top" src={product.img} alt={product.alt} />
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
    </ProductsContainer>
  );
};

export default Products;
