import React, {Component} from "react";
import drinks from "./drinks.json";

class MenuDrinks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            drinks: drinks.drinks,
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
        const drinks= this.state.drinks.map((drinksBtn, i) => {
            return (

              <button className="btnDrinks btnMenu" key={i} name={drinksBtn.title} value={drinksBtn.price} onClick={this.addItem}>{drinksBtn.title}</button>   
            )
        })

        return(
            <div>
                {drinks}
            </div>
        )
    }
}

export default MenuDrinks;