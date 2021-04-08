import React, { Component } from "react";
import Navibar from "../Components/Navibar";
import Newss from "../Layout/News";

export default class News extends Component {
  render() {
    return (
      <>
        <Navibar />
        <Newss />
      </>
    );
  }
}
