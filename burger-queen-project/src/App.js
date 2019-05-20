import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Home from "./Components/Home";
import Position from "./Components/Position";
import CashierOne from "./Components/CashierOne"
  

 class App extends Component {
  render() {
    return (
    <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Home' component={Home} />
              <Route path='/Position' component={Position} />
              <Route path='/CashierOne' component={CashierOne} />
          </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
