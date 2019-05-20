import React from "react";
import logoCashier from "../img/logo.png"
import {Card, CardImg, CardText, CardBody, CardTitle, Button } from "reactstrap"

    const OrderCard = (props) => {

        return(
            <div>
        <Card class="card col-sm-6" className="orderBox">
  <CardImg src={logoCashier} class="card-img-top" alt="..."/>
  <CardBody class="card-body">
    <CardTitle class="card-title">Orden #</CardTitle>
    <CardText class="card-text"></CardText>
    <Button>Enviar a cocina</Button>
    </CardBody>
    </Card>
  </div>

        );
    };
  
  

    export default OrderCard