import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

// Components
import App from "./App";
import Home from "./Components/Home";
import Position from "./Components/Position";
import Cashier1 from "./Components/Cashier1";
import Page404 from "./Components/Page404";

const AppRoutes = () =>
<BrowserRouter>
    <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/Position" component={Position} />
        <Route path="/Cashier1" component={Cashier1} />
        <Route path="/Page404" component={Page404} />
    </Switch>
</BrowserRouter>

export default AppRoutes;


//condtional rendering