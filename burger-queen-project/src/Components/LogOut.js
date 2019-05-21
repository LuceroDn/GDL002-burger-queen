import React, { Component } from "react";
import {Link} from "react-router-dom";


class LogOut extends Component {
    render() {
      return (
      <Link to="/Home"><button type="button" className="logOut fas fa-sign-out-alt"></button></Link>
      );
    }
  }
  
  export default LogOut;