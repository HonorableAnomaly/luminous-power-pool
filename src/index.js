import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./store";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// This project requires two terminals open:
// - One for 'npm start'
// - One for the json server with 'npm run start:server'
