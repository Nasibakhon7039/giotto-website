import React, { Component } from "react";
import Hero from "../Layout/Hero";
import Feature from "../Layout/Feature";
import Products from "../Components/Products";
import { productData } from "../Components/Products/data";
import ContactUs from "../Layout/ContactUs";

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <Products data={productData} />
        <Feature />
        <ContactUs />
      </>
    );
  }
}
