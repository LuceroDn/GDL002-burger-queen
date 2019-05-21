import React, { Component } from "react";
import {Link} from "react-router-dom";

class Position extends Component {

    render() {
      return (
        <div className="backgroundPosition">
     <Link to="/CashierOne"><button className="btnPosition">C A J A 1</button></Link>
     <Link to="/CashierOne"><button className="btnPosition">C A J A 2</button></Link>
     <button className="btnPosition">C O C I N A</button>
     </div>
      );
    }
  }

export default Position;