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
import stepImg from '../../images/howitworks.png'
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
          <img src={stepImg} />
        </div>
      </Step>
    </FeatureContainer>
  )
}

export default Feature
