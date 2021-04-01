import React from 'react';
import ProductsList from "../components/Products/ProsuctsList";
import Basket from "../components/Basket/Busket";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = (props) => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => <ProductsList productData={props.data} dataToCartFunction={props.tes}/>} />
            <Route path="/basket" render={() => <Basket list={props.list} statusOfBasket={props.statusOfBasket}/>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;