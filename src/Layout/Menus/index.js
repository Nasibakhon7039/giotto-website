import React, { useState } from 'react'
import { MenuContainer, ProductsWrapper } from './MenuElements'
import { Row, Col, Nav, Tab, Card, CardDeck, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { asyncAddToCartAction } from '../../redux/actions/cartActions/cartActions'
import Alert from '../../Components/Alert'
import { numberToPrice } from '../../utils/numberToPrice'

const Menus = ({ categories }) => {
  const dispatch = useDispatch()
  const [alert, setAlert] = useState(false)
  const [errorText, setErrorText] = useState(null)

  const addToCart = (item) => {
    dispatch(asyncAddToCartAction(item))
    setAlert(true)
    setErrorText(item.name)
  }
  return (
    <>
      <MenuContainer>
        <h1>Меню</h1>
        {categories.length > 0 && (
          <Tab.Container
            id='left-tabs-example'
            defaultActiveKey={categories[0].id}
          >
            <Row>
              <Col sm={3}>
                <Nav variant='pills' className='flex-column'>
                  {categories.map((category) => (
                    <Nav.Item key={category.id} className='my-2'>
                      <Nav.Link eventKey={category.id}>
                        {category.name}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {categories.map((item) => (
                    <Tab.Pane eventKey={item.id} key={item.id}>
                      <ProductsWrapper>
                        {item.products.length > 0 &&
                          item.products.map((product) => (
                            <CardDeck key={product.id}>
                              <Card
                                style={{ width: '16rem' }}
                                className='mr-5 mb-4 card-shadow'
                              >
                                <Card.Img
                                  variant='top'
                                  src={product.image.url}
                                  alt={product.name}
                                />
                                <Card.Body>
                                  <Card.Title class='h6'>
                                    {product.name}
                                  </Card.Title>
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
                          ))}
                      </ProductsWrapper>
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        )}
      </MenuContainer>
      <Alert
        open={alert}
        type='success'
        onClose={() => setAlert(false)}
        errorText={`Добавлено: ${errorText}`}
      />
    </>
  )
}

export default Menus
