import React from "react";
// import Login from "./Login";
// import Input from "./Input";

// var isLoggedIn = false;
// since boolean can write it if (isLoggedIn);
const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return (
    <div className="container">
      {currentTime > 12 ? <h1>Why are you still working </h1> : null}

      {/* can also be written as */}
      {/* {currentTime > 12 && <h1> why are you still working </h1} : null} */}
    </div>
  );
}

export default App;
