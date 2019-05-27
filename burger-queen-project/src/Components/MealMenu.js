import React, {Component} from "react";
import meal from "./meal.json";

class MenuMeal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meal: meal.meal,
            printOrder: [],
        
        }
    }

    addItem = (event) => {

        const target = event.currentTarget;
        const keyTitle = target.getAttribute("name");
        const keyPrice = target.getAttribute("value");
        const container = document.getElementsByClassName("printOrd")[0];
        container.innerHTML= " ";
           
        console.log(keyTitle, keyPrice)
        
        const object = {
            keyTitle,
            keyPrice
        }
        
        this.setState ({
            printOrder: [...this.state.printOrder, object]
            }, () => {
                console.log(this.state.printOrder)

              this.state.printOrder.forEach((item,i)=>{
                container.innerHTML+= `<li> ${item.keyTitle} ${item.keyPrice} <button className="delete"><i class="far fa-trash-alt"></i></button> </li>`
        
                })
            })
        
            
            
        console.log(this.state.printOrder);

    }
    render(){
        const meal= this.state.meal.map((mealBtn, i) => {
            return (

<button className="btnDinner btnMenu" key={i} name={mealBtn.title} value={mealBtn.price} onClick={this.addItem}>{mealBtn.title}</button>
                
            )
        })

        return(
            <div>
                {meal}
            </div>
        )
    }
}

export default MenuMeal;