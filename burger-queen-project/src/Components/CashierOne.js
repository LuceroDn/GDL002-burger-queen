import React, { Component } from "react";
import logoCashier from "../img/logo.png"
import MenuBreakfast from "./BreakfastMenu";
import MenuMeal from "./MealMenu";
import MenuDrinks from "./DrinksMenu";
//import OrderCard from "./OrderCard"


class CashierOne extends Component {

    render() {
      return (
     <div className="backgroundHome row-sm-12">
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
        <div class="card col-sm-6" className="orderBox">
  <img src={logoCashier} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Orden #</h5>
    <p class="card-text"></p>
  </div>
</div>
        </div>

      </div>
  
      );
    }
  }

export default CashierOne;