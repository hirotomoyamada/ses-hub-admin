import "./styles/reset.scss";
import "./styles/base.scss";

import React from "react";
import ReactDOM from "react-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";

import App from "./App";

// import { insert } from "./firebase";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
