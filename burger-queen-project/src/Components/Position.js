import React, { Component } from "react";
import {Link} from "react-router-dom";

class Position extends Component {

    render() {
      return (
        <div className="backgroundPosition">
     <Link to="/CheckoutOne"><button className="btnPosition">C A J A 1</button></Link>
     <Link to="/CheckoutTwo"><button className="btnPosition">C A J A 2</button></Link>
     <Link to="/Kitchen"><button className="btnPosition">C O C I N A</button></Link>
     </div>
      );
    }
  }

export default Position;