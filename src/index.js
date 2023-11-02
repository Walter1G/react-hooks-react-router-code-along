import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
















// function App() {
//   return <Home />;
// }

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById("root")
);