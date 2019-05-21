import React, { Component } from "react";
import {Link} from "react-router-dom";
import logo from "../img/logo.png";


class Home extends Component {
    render() {
      return (
        <div className="backgroundHome">
          <img className="logo" src={logo} alt="logoBQ"/>
      <Link to="/Position"><button type="button" className="start" onClick={this.onClick} >Inicio</button></Link>
     </div>
      );
    }
  }
  
  export default Home