import React, { Component } from "react";
import logoCashier from "../img/logo.png"
import MenuBreakfast from "./BreakfastMenu";
import MenuMeal from "./MealMenu";
import MenuDrinks from "./DrinksMenu";
import LogOut from "./LogOut";
//import Command from "./Command";
//import OrderCard from "./OrderCard"


class CheckoutOne extends Component {
  
    render() {
      return (
     <div className="backgroundMenuOrder row-sm-12">
     
      <div className="Menu col-sm-6">
        <div className="backgroundBreakfast">
            <p className="titleBkf">D e s a y u n o</p>
                <MenuBreakfast />
        </div>
        <div className="backgroundMeal">
            <p className="titleBkf">C o m i d a</p>
               <MenuMeal />
        </div>
        <div className="backgroundDrinks">
            <h2 className="titleDrinks">B e b i d a s</h2>
               <MenuDrinks />
        </div>
      </div>

        <div>
        <div className="card col-sm-6" className="orderBox">
  <img src={logoCashier} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title">Cashier 1</h5>
    <h5 className="numOrder">Orden #</h5>
    <p className="card-text printOrd"></p>
  </div>
  <div className="col-sm-2">
  <button type="button" className="sendKitchen" >Enviar a Cocina</button>
  </div>
  <div>
    <LogOut />
  </div>
</div>
        </div>

      </div>
  
      );
    }
  }

export default CheckoutOne;