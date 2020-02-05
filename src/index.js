import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";

import "bulma/css/bulma.css";
import "./styles.scss";

import { createStore } from "redux";
import { carReducer as reducer } from "../src/reducers";

export const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
