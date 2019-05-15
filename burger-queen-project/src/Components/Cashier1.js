import React, { Component } from "react";
//import logoCashier from "../img/logo.png"
import MenuBreakfast from "./BreakfastMenu";
import MenuDinner from "./DinnerMenu";
import MenuDrinks from "./DrinksMenu";
import OrderCard from "./OrderCard"


class Cashier1 extends Component {

    render() {
      return (
     <div className="backgroundHome row-sm-12">
      <div className="Menu col-sm-6">
        <div className="backgroundBreakfast">
            <p className="titleBkf">D e s a y u n o</p>
                <MenuBreakfast />
        </div>
        <div className="backgroundDinner">
            <p className="titleBkf">C o m i d a</p>
               <MenuDinner />
        </div>
        <div className="backgroundDrinks">
            <h2 className="titleDrinks">B e b i d a s</h2>
               <MenuDrinks />
        </div>
        <div>

        </div>
      </div>
      <div className="Order col-sm-6">
        <div>
      {OrderCard}
        </div>
        <div>
          
        </div>
      </div>
     </div>
      );
    }
  }

export default Cashier1;