import React from "react";
import Login from "./Login";
// import Input from "./Input";

var isLoggedIn = false;
// since boolean can write it if (isLoggedIn);

function App() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;

/* {/* move function in line - use teranary operator */
// this replaces all the code that was in AppLong.jsx} */}
