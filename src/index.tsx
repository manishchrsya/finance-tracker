import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import "react-toastify/dist/ReactToastify.css";
import "remixicon/fonts/remixicon.css";
import { ToastContainer, Slide } from "react-toastify";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        style={{ zIndex: 2765347625347623 }}
        hideProgressBar
        closeOnClick
        pauseOnHover
        transition={Slide}
        theme="dark"
        limit={1}
      />
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
