import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import client from "./graphQl/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./styles/themes/defaultTheme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
