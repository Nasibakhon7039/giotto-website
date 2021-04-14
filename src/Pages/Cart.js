import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ShopWrapper } from '../Components/Wrapper'
import { ShopTitle } from '../Components/Title'
import {
  CartWrapper,
  CartList,
  CartImage,
  CartItem,
  CartBody,
  CartInfo,
  Title,
  Quantity,
  ActionsBlock,
  Actions,
  ActionButton,
  Count,
  Price,
  PriceBlock,
  TotalPrice,
  TrashWrapper,
  TrashButton,
  CheckoutWrapper,
  CheckoutInfo,
  CheckoutInfoRow,
  CheckoutButton,
  ShoppingButton,
  CheckoutBlock,
} from '../Components/Cart/Cart'
import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import {
  cartTotalPriceSelector,
  cartItemsTotalQuantitySelector,
} from '../redux/selectors/cartSelectors'
import {
  asyncRemoveFromCartAction,
  asyncAddToCartAction,
  asyncReduceCartItemQuantityAction,
} from '../redux/actions/cartActions/cartActions'
import { numberToPrice } from '../utils/numberToPrice'
import Navibar from '../Components/Navibar'
import Layout from '../Layout/Layout'

export default function Cart() {
  const dispatch = useDispatch()
  const router = useHistory()

  const user = useSelector((state) => state.auth.user)

  const cartItems = useSelector((state) => state.cart.cartItems, shallowEqual)
  const totalPrice = useSelector(
    (state) => cartTotalPriceSelector(state),
    shallowEqual
  )
  const totalQuantity = useSelector(
    (state) => cartItemsTotalQuantitySelector(state),
    shallowEqual
  )
  const reduceCartItemQuantityHandler = (cartItem) => {
    if (cartItem.quantity === 1) return
    else dispatch(asyncReduceCartItemQuantityAction(cartItem))
  }
  const removeFromCartHandler = (cartItem) => {
    dispatch(asyncRemoveFromCartAction(cartItem))
  }
  const addToCartHandler = (cartItem) => {
    dispatch(asyncAddToCartAction(cartItem))
  }

  const goCheckout = (event) => {
    event.preventDefault()
    router.push('/checkout')
  }

  return (
    <Layout>
      <Navibar />
      <ShopWrapper>
        <ShopTitle>
          В корзине{' '}
          {totalQuantity !== 0
            ? `${totalQuantity} ${
                totalQuantity > 1
                  ? totalQuantity > 4
                    ? 'товаров'
                    : 'товара'
                  : 'товар'
              }`
            : 'нет товаров'}
        </ShopTitle>
        <CartWrapper>
          <CartList cart='true'>
            {cartItems.length
              ? cartItems.map((item) => {
                  const totalPrice = item.quantity * item.price
                  return (
                    <CartItem key={item.id} className='desc-price'>
                      <CartImage>
                        <img src={item.image.url} alt={item.name} />
                      </CartImage>
                      <CartBody>
                        <CartInfo>
                          <Title>{item.name}</Title>
                          <Quantity>{item.description}</Quantity>
                        </CartInfo>
                        <ActionsBlock>
                          <Actions>
                            <ActionButton
                              onClick={() =>
                                reduceCartItemQuantityHandler(item)
                              }
                            >
                              <FaMinus />
                            </ActionButton>
                            <Count>{item.quantity}</Count>
                            <ActionButton
                              onClick={() => addToCartHandler(item)}
                            >
                              <FaPlus />
                            </ActionButton>
                          </Actions>
                          <Price>{numberToPrice(item.price)}/шт.</Price>
                        </ActionsBlock>
                        <PriceBlock>
                          <TotalPrice>{numberToPrice(totalPrice)}</TotalPrice>
                          {/* <OldPrice>18 780 ₽</OldPrice> */}
                        </PriceBlock>
                        <TrashWrapper>
                          <TrashButton
                            onClick={() => removeFromCartHandler(item)}
                          >
                            <FaTrashAlt />
                          </TrashButton>
                        </TrashWrapper>
                      </CartBody>
                    </CartItem>
                  )
                })
              : ''}
          </CartList>
          <CheckoutWrapper>
            <CheckoutBlock cart='true'>
              <CheckoutInfo>
                <CheckoutInfoRow>
                  <span>Товары ({totalQuantity})</span>
                  <span>{numberToPrice(totalPrice)}</span>
                </CheckoutInfoRow>
                <CheckoutInfoRow>
                  <span>Стоимость доставки</span>
                  <span>0</span>
                </CheckoutInfoRow>
                <CheckoutInfoRow>
                  <span>Скидка</span>
                  <span>0</span>
                </CheckoutInfoRow>
                <CheckoutInfoRow>
                  <span>Итого</span>
                  <span>{numberToPrice(totalPrice)}</span>
                </CheckoutInfoRow>
              </CheckoutInfo>
              {cartItems.length === 0 ? (
                ''
              ) : (
                <Link to='/checkout'>
                  <CheckoutButton onClick={goCheckout}>
                    Перейти к оформлению
                  </CheckoutButton>
                </Link>
              )}
              <ShoppingButton onClick={() => router.goBack()}>
                Вернуться в меню
              </ShoppingButton>
            </CheckoutBlock>
          </CheckoutWrapper>
        </CartWrapper>
      </ShopWrapper>
    </Layout>
  )
}
