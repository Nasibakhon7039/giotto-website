import React, { useState } from 'react'
import { CardDeck, Card, Button } from 'react-bootstrap'
import {
  ProductsContainer,
  ProductsWrapper,
  ProductsHeading,
} from './ProductsElements'
import { numberToPrice } from '../../utils/numberToPrice'
import { useDispatch } from 'react-redux'
import { asyncAddToCartAction } from '../../redux/actions/cartActions/cartActions'
import Alert from '../Alert'
import { useHistory } from 'react-router-dom'

const Products = ({ data }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const [alert, setAlert] = useState(false)
  const [errorText, setErrorText] = useState(null)

  const addToCart = (item) => {
    dispatch(asyncAddToCartAction(item))
    setAlert(true)
    setErrorText(item.name)
  }
  return (
    <>
      <ProductsContainer>
        <ProductsHeading className='heading'>
          <h1>Выбери свой любимый вкус</h1>
        </ProductsHeading>
        <span onClick={() => history.push('/menu')}>Ещё &rarr;</span>
        <ProductsWrapper>
          {data.map((product, index) => {
            return (
              <CardDeck key={index}>
                <Card className='m-4 card-shadow'>
                  <Card.Img
                    variant='top'
                    src={product.image?.url}
                    alt={product.name}
                  />
                  <Card.Body>
                    <Card.Title class='h6'>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text className='mt-3 footer-card'>
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
      <Alert
        open={alert}
        type='success'
        onClose={() => setAlert(false)}
        errorText={`Добавлено: ${errorText}`}
      />
    </>
  )
}

export default Products
