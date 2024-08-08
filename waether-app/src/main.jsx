import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.css";
import { Provider } from "react-redux";
import weatherDataStore from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={weatherDataStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
