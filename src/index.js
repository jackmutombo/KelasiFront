import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");

let render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
};

if (module.hot) {
  module.hot.accept("./components/App.jsx", () => {
    setTimeout(render);
  });
}

render();
