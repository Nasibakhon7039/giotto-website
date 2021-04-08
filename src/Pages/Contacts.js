import React, { Component } from "react";
import Navibar from "../Components/Navibar";
import ContactPage from "../Layout/ContactPage";

export default class Contacts extends Component {
  render() {
    return (
      <>
        <Navibar />
        <ContactPage />
      </>
    );
  }
}
