import React, { Component } from "react";
import { breakfast } from "./breakfast.json";

class MenuBreakfast extends Component {
    constructor() {
        super();
        this.state = {
            breakfast
        }
    }

    //let newObject= this.status.breakfast;

    //localStorage.setItem('orders', JSON.stringify(newObject));

    render() {
        const breakfast = this.state.breakfast.map((breakfastBtn, i) => {
            return (
                <button className="btnBreakfast btnMenu" name={i} onClick={this.onClick} >{breakfastBtn.title}</button>
            )
        })

        return (
            <div>
                {breakfast}
            </div>
        );

    }
}


export default MenuBreakfast;