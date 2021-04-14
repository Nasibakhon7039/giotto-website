import React from 'react'
import {
  FeatureContainer,
  FeatureButton,
  OrderNow,
  Step,
  // IceCream,
  // CartPlus,
  // Payment,
} from './FeatureElements'
import { useHistory } from 'react-router-dom'

const Feature = () => {
  const history = useHistory()
  return (
    <FeatureContainer>
      <OrderNow>
        <h1>Десерт дня</h1>
        <p>Нежные ароматные бельгийские вафли с бананом</p>
        <FeatureButton onClick={() => history.push('/menu')}>
          Заказать сейчас
        </FeatureButton>
      </OrderNow>
      <Step>
        <h1>Теперь заказывать очень легко!</h1>
        <div className='step-div'>
          {/* <IceCream />
          <h6>Выбери любимый вкус</h6>
        </div>
        <div className="step-div">
          <CartPlus />
          <h6>Выбери любимый вкус</h6>
        </div>
        <div className="step-div">
          <Payment />
          <h6>Выбери любимый вкус</h6> */}
        </div>
      </Step>
    </FeatureContainer>
  )
}

export default Feature
