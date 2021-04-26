import styled from "styled-components";
import FeaturePic from "../../Images/feature.jpg";
import LineBack from "../../Images/dotted-bar.png";
import { FaIceCream, FaCartPlus } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

export const FeatureContainer = styled.div`
  margin: 100px 0 100px 0;
`;

export const OrderNow = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  text-align: center;
  padding-top: 150px;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    color: white;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.7rem 2.3rem;
  border: none;
  background: #100966;
  color: #fff;
  transition: 0.2s ease-out;
  border-radius: 10px;

  &:hover {
    transform: scale(1.1) perspective(1px);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;

export const Step = styled.div`
  //background-image: url(${LineBack});
  background-size: cover;
  padding: 30px 0 30px 0;
  text-align: center;
  height: 400px;

  .step-div {
    display: inline-block;
    margin: 90px 110px 0 110px;

  img{
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
}
  }
