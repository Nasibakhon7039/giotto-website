import React, { Component } from "react";
import Navibar from "../Components/Navibar";
import AboutUs from "../Layout/AboutUs";

export default class About extends Component {
  render() {
    return (
      <>
        <Navibar />
        <AboutUs />
      </>
    );
  }
}
