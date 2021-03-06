import React, { Component } from "react";
import breakfast from "./breakfast.json";
//import Command from "./Command";

class MenuBreakfast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breakfast: breakfast.breakfast,
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
                container.innerHTML+= `<li> ${item.keyTitle} ${item.keyPrice} <button className="delete"><i class="far fa-trash-alt"></button></li>`
        
                });
                this.total();
            });
        
            
            
        console.log(this.state.printOrder);

    };

    total() {
        const mapItemValue = this.state.printOrder.map(item => {
          let value = parseInt(item.keyPrice);
          return value;
        });
        const totalSum = mapItemValue.reduce((acc, val) => acc + val, 0);
        console.log(totalSum);
        const prinTotal = document.getElementsByClassName("print-total")[0];
        prinTotal.innerHTML = `Total: $  ${totalSum}.00`;
    
        return totalSum;
      }

    //let newObject= this.status.breakfast;

    //localStorage.setItem('orders', JSON.stringify(newObject));

    render() {
        const breakfast = this.state.breakfast.map((breakfastBtn, i) => {
            return (
                <button className="btnBreakfast btnMenu" key={i} name={breakfastBtn.title} value={breakfastBtn.price} onClick={this.addItem} >{breakfastBtn.title}</button>
            )
        } )

        return (
            <div>
                {breakfast}
                
            </div>
        );

    }
}


export default MenuBreakfast;