import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      suess: ["One Fish", "Two Fish", "Three Fish", "Four Fish"]
    };
  }

  render() {
    let drSuess = this.state.suess.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{drSuess}</div>;
  }
}

export default App