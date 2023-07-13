import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import theme from "./theme";
import App from "./App";
import "./index.css";
import axios from "axios";
// axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.baseURL = "https://pf-ecommerce-7pvg.onrender.com";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
