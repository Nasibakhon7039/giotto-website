import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Footer />
      </Router>
    </>
  );
}

export default App;
