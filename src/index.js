import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import App from "./components/App/App";
import store from "./store/store";
import "./index.scss";

const history = createBrowserHistory();

const app = (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.querySelector("#root"));
