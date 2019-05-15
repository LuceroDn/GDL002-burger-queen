import React, {Component} from "react";
import {Dinner} from "./Dinner.json";

class MenuDinner extends Component {
    constructor() {
        super();
        this.state={
            Dinner
        }
    }
    render(){
        const Dinner= this.state.Dinner.map((DinnerBtn, i) => {
            return (

<button className="btnDinner btnMenu">{DinnerBtn.title}</button>
                
            )
        })

        return(
            <div>
                {Dinner}
            </div>
        )
    }
}

export default MenuDinner;