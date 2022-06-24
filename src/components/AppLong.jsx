import React from "react";
import Login from "./Login";
// import Input from "./Input";

var isLoggedIn = false;
// since boolean can write it if (isLoggedIn);

function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default AppLong;
