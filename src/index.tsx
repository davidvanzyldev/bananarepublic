import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// style to 'reset'
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);