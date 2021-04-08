import React, { Component } from "react";
import Navibar from "../Components/Navibar";
import Menus from "../Layout/Menus";
import { productData } from "../Components/Products/data";

export default class Menu extends Component {
  render() {
    return (
      <>
        <Navibar />
        <Menus data={productData} />
      </>
    );
  }
}
