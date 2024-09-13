import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "react-auth-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <AuthProvider
  //   authType={"cookie"}
  //   authName={"_auth"}
  //   cookieDomain={window.location.hostname}
  //   cookieSecure={true}
  // >
  <App />
  // </AuthProvider>
);
