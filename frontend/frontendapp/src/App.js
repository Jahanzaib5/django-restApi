import React, { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import First from "./components/First-page/login";
import Books from "./components/Books/Books";

function App() {
  const [token, setToken] = useState("");

  const userLogin = (tok) => {
    setToken(tok);
  };
  return (
    <div>
      <First userLogin={userLogin} />
      <br />
      <br />
      <Books token={token}/>
    </div>
  );
}

export default App;
