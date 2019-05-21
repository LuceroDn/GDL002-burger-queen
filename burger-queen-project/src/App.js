import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Home from "./Components/Home";
import Position from "./Components/Position";
import CheckoutOne from "./Components/CheckoutOne"
import CheckoutTwo from "./Components/CheckoutTwo";
  

 class App extends Component {
  render() {
    return (
    <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/Home' component={Home} />
              <Route path='/Position' component={Position} />
              <Route path='/CheckoutOne' component={CheckoutOne} />
              <Route path='/CheckoutTwo' component={CheckoutTwo} />
          </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
