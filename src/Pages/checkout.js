import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ShopWrapper } from '../Components/Wrapper'
import { ShopTitle } from '../Components/Title'
import {
  CartWrapper,
  CartList,
  CheckoutWrapper,
  CheckoutInfo,
  CheckoutInfoRow,
  Input,
} from '../Components/Cart/Cart'
import {
  FormWrapper,
  FormTitle,
  InputWrapper,
  Text,
  Button,
  ButtonWrapper,
  RadioGroup,
  RadioWrapper,
  Label,
  InputRadio,
  RadioBlock,
  Wrapper,
  RadioTitle,
  RadioDesc,
  RadioIcon,
  CheckoutHeader,
  CheckoutTitle,
  CheckoutLink,
  Item,
  ItemBody,
  ItemQuantity,
  ItemImage,
  Container,
} from '../Components/Checkout/Checkout'
import { useSelector, shallowEqual } from 'react-redux'
import {
  cartTotalPriceSelector,
  cartItemsTotalQuantitySelector,
} from '../redux/selectors/cartSelectors'
import { numberToPrice } from '../utils/numberToPrice'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { clearCartAction } from '../redux/actions/cartActions/cartActions'
import Alert from '../Components/Alert'
import { CircularProgress } from '@material-ui/core'
import Layout from '../Layout/Layout'
import Navibar from '../Components/Navibar'

export default function Checkout() {
  const [values, setValues] = useState({
    address: null,
    name: '',
    phone: '',
    delivery_method: '',
    payment_method: '',
    note: '',
  })
  const dispatch = useDispatch()
  const router = useHistory()
  const user = useSelector((state) => state.auth.user)
  const [error, setError] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [errorType, setErrorType] = useState('error')
  const [loading, setLoading] = useState(false)

  //   useEffect(() => {
  //     setValues({
  //       ...values,
  //       name: `${user.name} ${user.lastname}`,
  //       phone: user.phone,
  //     })
  //   }, [user])

  const cartItems = useSelector((state) => state.cart.cartItems, shallowEqual)
  const totalPrice = useSelector(
    (state) => cartTotalPriceSelector(state),
    shallowEqual
  )
  const totalQuantity = useSelector(
    (state) => cartItemsTotalQuantitySelector(state),
    shallowEqual
  )

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    const orderItems = [...cartItems]
    const data = {
      address: values.address,
      name: values.name,
      delivery_type: values.delivery_method || 'deliver',
      items: JSON.stringify(
        orderItems.map((item) => {
          return {
            price: parseFloat(item.price.price),
            product_id: item.id,
            product_name: item.name,
            quantity: item.quantity,
          }
        })
      ),
      comment: values.note,
      phone: values.phone,
    }
    console.log('submit =>', data)

    try {
      const response = await axios.post(process.env.ORDER_API_URL, data)

      if (response.status === 200) {
        setLoading(false)
        dispatch(clearCartAction())
        console.log('order created')
      }
      console.log(response)
    } catch (error) {
      setLoading(false)
      setError(true)
      setErrorText('Что-то пошло не так')
      console.log(error)
    }
  }

  return (
    <Layout>
      <Navibar />
      <ShopWrapper>
        <ShopTitle>Оформление заказа</ShopTitle>
        <CartWrapper>
          <CartList>
            <form onSubmit={onSubmit}>
              <FormWrapper>
                <FormTitle>Адрес получателя</FormTitle>
                <InputWrapper>
                  <Input
                    name='name'
                    defaultValue={user && `${user.name} ${user.lastname}`}
                    onChange={(e) => handleChange(e)}
                    label='Фамилия и Имя'
                    variant='outlined'
                    fullWidth
                    required
                  />
                </InputWrapper>
                <InputWrapper>
                  <Input
                    name='address'
                    defaultValue={user && user.address}
                    onChange={(e) => handleChange(e)}
                    label='Адрес'
                    variant='outlined'
                    fullWidth
                    required
                  />
                </InputWrapper>
                <InputWrapper>
                  <Input
                    name='phone'
                    defaultValue={user && user.phone}
                    onChange={(e) => handleChange(e)}
                    label='Телефон'
                    variant='outlined'
                    fullWidth
                    required
                  />
                </InputWrapper>
              </FormWrapper>
              <FormWrapper>
                <FormTitle>Способ получения</FormTitle>
                <RadioGroup>
                  <RadioWrapper>
                    <Label htmlFor='pickup'>
                      <InputRadio
                        type='radio'
                        defaultChecked
                        name='delivery_method'
                        onChange={(e) => handleChange(e)}
                        id='pickup'
                      />
                      <RadioBlock>
                        <Wrapper>
                          <RadioTitle>Самовывоз</RadioTitle>
                          <RadioDesc>Без лишних рук и когда удобно</RadioDesc>
                        </Wrapper>
                      </RadioBlock>
                    </Label>
                  </RadioWrapper>
                  <RadioWrapper>
                    <Label htmlFor='deliver'>
                      <InputRadio
                        type='radio'
                        name='delivery_method'
                        onChange={(e) => handleChange(e)}
                        id='deliver'
                      />
                      <RadioBlock>
                        <Wrapper>
                          <RadioTitle>Курьером</RadioTitle>
                          <RadioDesc>
                            В удобный для вас день и интервал времени
                          </RadioDesc>
                        </Wrapper>
                      </RadioBlock>
                    </Label>
                  </RadioWrapper>
                </RadioGroup>
              </FormWrapper>
              <FormWrapper>
                <FormTitle>Дополнительно</FormTitle>
                <Input
                  name='note'
                  onChange={(e) => handleChange(e)}
                  label='Комментарий к заказу'
                  variant='outlined'
                  fullWidth
                  multiline
                />
                <Text>
                  Нажимая «Подтвердить заказ», вы соглашаетесь с условиями
                  использования Giotto. С подробными условиями
                  доставки можно ознакомиться на странице о доставке
                </Text>
              </FormWrapper>
              <ButtonWrapper>
                <Button disabled={loading}>
                  {loading ? (
                    <CircularProgress size='30px' color='white' />
                  ) : (
                    'Подтвердить заказ'
                  )}
                </Button>
              </ButtonWrapper>
            </form>
          </CartList>
          <CheckoutWrapper>
            <Container>
              <CheckoutInfo>
                <CheckoutHeader>
                  <CheckoutTitle>Ваш заказ</CheckoutTitle>
                  <Link to='/cart'>
                    <CheckoutLink>Изменить</CheckoutLink>
                  </Link>
                </CheckoutHeader>
                <CheckoutInfoRow>
                  <span>Товары ({totalQuantity})</span>
                  <span>{numberToPrice(totalPrice)}</span>
                </CheckoutInfoRow>
                <CheckoutInfoRow>
                  <span>Доставка курьером ({totalQuantity})</span>
                  <span>0</span>
                </CheckoutInfoRow>
                <CheckoutInfoRow>
                  <span>Скидка на товары</span>
                  <span>0</span>
                </CheckoutInfoRow>
                <CheckoutInfoRow total='true'>
                  <span>Итого</span>
                  <span>{numberToPrice(totalPrice)}</span>
                </CheckoutInfoRow>
              </CheckoutInfo>
              <CheckoutInfo>
                <CheckoutTitle>Состав заказа</CheckoutTitle>
                {cartItems.map((item) => (
                  <Item key={item.id}>
                    <ItemImage>
                      <img src={item.image.url} alt={item.name} />
                    </ItemImage>
                    <ItemBody>
                      <div>{item.name}</div>
                      <ItemQuantity>{item.quantity} шт.</ItemQuantity>
                    </ItemBody>
                  </Item>
                ))}
              </CheckoutInfo>
            </Container>
          </CheckoutWrapper>
        </CartWrapper>
      </ShopWrapper>
      <Alert
        open={error}
        type={errorType}
        onClose={() => setError(false)}
        errorText={errorText}
      />
    </Layout>
  )
}
