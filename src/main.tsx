import React from "react";
import ReactDOM from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from "./App.tsx";
import "./index.css";

import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";
import "aos/dist/aos.css";
import "./i18n/i18n";

AOS.init({ once: true, delay: 100 });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster />
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

      <SpeedInsights />
    </BrowserRouter>
  </React.StrictMode>,
);
