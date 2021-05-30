// VENDOR imports
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
// imports
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";
import { client } from "./setup/Apollo/client";
// style imports
import "./index.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
