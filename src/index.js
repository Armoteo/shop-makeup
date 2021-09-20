import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
// import { createStore } from "redux";
import App from "./components/App/App";
// import rootReducer from "./redux/rootReducer";

// const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
