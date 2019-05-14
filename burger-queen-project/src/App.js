import React, { Component } from "react";
import "./App.css";
//import { Button } from 'reactstrap';
import Home from "./Components/Home";
import Position from "./Components/Position";
import Cashier1 from "./Components/Cashier1"

 class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Position />
        <Cashier1 />
      </div>
      
    );
  }
}

export default App;
