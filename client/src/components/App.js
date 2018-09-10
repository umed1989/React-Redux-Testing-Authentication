import React from "react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

export default () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};
