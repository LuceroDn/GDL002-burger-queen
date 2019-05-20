import React, {Component} from "react";
import {Meal} from "./Meal.json";

class MenuMeal extends Component {
    constructor() {
        super();
        this.state={
            Meal
        }
    }
    render(){
        const Meal= this.state.Meal.map((MealBtn, i) => {
            return (

<button className="btnDinner btnMenu">{MealBtn.title}</button>
                
            )
        })

        return(
            <div>
                {Meal}
            </div>
        )
    }
}

export default MenuMeal;