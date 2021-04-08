import React from "react";
import {
  FeatureContainer,
  FeatureButton,
  OrderNow,
  Step,
  IceCream,
  CartPlus,
  Payment,
} from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer>
      <OrderNow>
        <h1>Десерт дня</h1>
        <p>Нежные ароматные бельгийские вафли с бананом</p>
        <FeatureButton>Заказать сейчас</FeatureButton>
      </OrderNow>
      <Step>
        <h1>Теперь заказывать очень легко!</h1>
        <div className="step-div">
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
  );
};

export default Feature;
