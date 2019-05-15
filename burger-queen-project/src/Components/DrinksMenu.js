import React, {Component} from "react";
import {Drinks} from "./Drinks.json";

class MenuDrinks extends Component {
    constructor() {
        super();
        this.state={
            Drinks
        }
    }
    render(){
        const Drinks= this.state.Drinks.map((DrinksBtn, i) => {
            return (

              <button className="btnDrinks btnMenu" value="5">{DrinksBtn.title}</button>
                
            )
        })

        return(
            <div>
                {Drinks}
            </div>
        )
    }
}

export default MenuDrinks;