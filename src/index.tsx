import React from "react";
import ReactDOM from "react-dom";
//import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { AppStateProvider } from "./state/AppStateContext";
ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
