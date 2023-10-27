import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(store.getState());
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
