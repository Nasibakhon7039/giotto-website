import React from 'react'
import { CardDeck } from 'react-bootstrap'
import {
  ProductsContainer,
  ProductsWrapper,
  ProductsHeading,
} from './ProductsElements'
import { Card, Button } from 'react-bootstrap'
import { numberToPrice } from '../../utils/numberToPrice'
import { useDispatch, useSelector } from 'react-redux'
import { asyncAddToCartAction } from '../../redux/actions/cartActions/cartActions'

const Products = ({ data }) => {
  const dispatch = useDispatch()
  const globalState = useSelector((state) => state)
  console.log('globalstate => ', globalState)

  const addToCart = (item) => {
    dispatch(asyncAddToCartAction(item))
  }
  return (
    <ProductsContainer>
      <ProductsHeading className='heading'>
        <h1>Выбери свой любимый вкус</h1>
      </ProductsHeading>
      <span>Ещё &rarr;</span>
      <ProductsWrapper>
        {data.map((product, index) => {
          return (
            <CardDeck key={index}>
              <Card style={{ width: '16rem' }} className='m-4 card-shadow'>
                <Card.Img
                  variant='top'
                  src={product.image?.url}
                  alt={product.name}
                />
                <Card.Body>
                  <Card.Title class='h6'>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className='mt-5 footer-card'>
                    <b>
                      <p>{numberToPrice(product.price)}</p>
                    </b>
                    <Button
                      className='btn'
                      size='sm'
                      onClick={() => addToCart(product)}
                    >
                      В корзину
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          )
        })}
      </ProductsWrapper>
    </ProductsContainer>
  )
}

export default Products
