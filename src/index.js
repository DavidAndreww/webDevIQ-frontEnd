import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./all.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain="dev-iq.us.auth0.com"
  clientId="FUY3rWQtf1m3vqocXIq3QGdH6b5C0J7q"
  redirectUri="http://localhost:3000/dashboard"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById("root")
);
