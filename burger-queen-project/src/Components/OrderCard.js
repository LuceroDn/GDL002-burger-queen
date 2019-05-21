import React from "react";
import logoCashier from "../img/logo.png"
import {Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap"

    const OrderCard = (props) => {

        return(
            <div>
       <Card>
        <CardImg top width="100%" src={logoCashier} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
  </div>

        );
    };
  
  

    export default OrderCard