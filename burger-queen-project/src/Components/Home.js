import React, { Component } from "react";
import logo from "../img/logo.png" 


class Home extends Component {
    render() {
      return (
        <div className="backgroundHome">
          <img className="logo" src={logo} alt="logoBQ"/>
          <button type="button" className="start" onClick={this.onClick}>Inicio</button>
     </div>
      );
    }
  }
  
  export default Home