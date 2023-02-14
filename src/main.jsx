import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import store from "./store";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { CLIENT_ID_GCP } from "./constant";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID_GCP}>
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);