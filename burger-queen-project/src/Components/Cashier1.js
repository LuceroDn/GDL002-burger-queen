import React, { Component } from "react";
import logoCashier from "../img/logo.png"

class Cashier1 extends Component {

    render() {
      return (
     <div className="backgroundHome">
        <div className="backgroundBreakfast col-sm-6">
            <h2 className="titleBkf">Desayuno</h2>
                <button className="btnBreakfast btnMenu">Sandwich de jamón y queso</button>
                <button className="btnBreakfast btnMenu">Jugo de frutas natural</button> 
                <button className="btnBreakfast btnMenu">Café americano</button>
                <button className="btnBreakfast btnMenu">Café con leche</button>
        </div>
        <div className="backgroundDinner col-sm-6">
            <h2 className="titleBkf">Comida</h2>
                <button className="btnDinner btnMenu">Hamburguesa simple</button>
                <button className="btnDinner btnMenu">Hamburguesa doble</button> 
                <button className="btnDinner btnMenu">Papas fritas</button>
                <button className="btnDinner btnMenu">Aros de cebolla</button>
        </div>
        <div className="backgroundDrinks col-sm-6">
            <h2 className="titleDrinks">Bebidas</h2>
                <button className="btnDrinks btnMenu">Agua 500ml</button>
                <button className="btnDrinks btnMenu">Agua 750ml</button> 
                <button className="btnDrinks btnMenu">Gaseosa 500ml</button>
                <button className="btnDrinks btnMenu">Gaseosa 500ml</button>
        </div>
        <div>
        <img className="logoCashier" src={logoCashier} alt="logoBQ"/>
        </div>
     </div>
      );
    }
  }

export default Cashier1;