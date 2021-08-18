import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import middleware from "./middleware";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { handleInitialData } from "../src/actions/shared";
const store = createStore(reducer, middleware);
store.dispatch(handleInitialData());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
