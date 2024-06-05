import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        outerStyle={{
          border: "3px solid var(--cursor-color)",
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
);
