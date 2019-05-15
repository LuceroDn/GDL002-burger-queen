import React, {Component} from "react";
import {Breakfast} from "./Breakfast.json";

class MenuBreakfast extends Component {
    constructor() {
        super();
        this.state={
            Breakfast
        }
    }
    render(){
        const Breakfast= this.state.Breakfast.map((breakfastBtn, i) => {
            return (

<button className="btnBreakfast btnMenu">{breakfastBtn.title}</button>
                
            )
        })

        return(
            <div>
                {Breakfast}
            </div>
        )
    }
}

export default MenuBreakfast;