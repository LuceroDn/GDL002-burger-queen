import React, { Component } from "react";
import "./App.css";
//import { Button } from 'reactstrap';
import Home from "./Components/Home";
import Position from "./Components/Position";
import CashierOne from "./Components/CashierOne"
  

 class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Position />
        <CashierOne />
      </div>
      
    );
  }
}

export default App;
