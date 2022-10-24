import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./fonts/JosefinSans/JosefinSans-Regular.tff";
// import "./fonts/JosefinSans/JosefinSans-Bold.tff";
// import "./fonts/OpenSans/OpenSans-Regular.tff";
// import "./fonts/OpenSans/OpenSans-Bold.tff";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
