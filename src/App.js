import React, { Component, setState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Person1 from "./Person/person";
import UserInput from "./InputOutput/UserInput";
import UserOutput from "./InputOutput/UserOutput";
import InputOutputApp from "./InputOutput/InputOutputApp";

export class App1 extends Component {
  render() {
    return (
      <div className="App">
        <InputOutputApp />
      </div>
    );
  }
}
export default App1
