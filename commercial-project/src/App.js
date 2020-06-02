import React from 'react';
import './App.css';
import Header from "./header/Header";
import {Redirect, Route, Switch} from "react-router-dom";
import {appConstant as appConstants} from "./appConstants/appConstants";
import Login from "./login/Login";
import Home from "./home/Home";
import Products from "./products/Products";
import Product from "./products/productDetail/Product";
import {Account} from "./account/Account";
import Cart from "./cart/Cart";


class App extends React.Component{
  state={};
  render() {

    return(
        <>
          <nav>
            <Header/>
          </nav>
          <main>
            <Switch>
                <Route path={appConstants.homeRoute} component={Home}/>
                <Route path={appConstants.loginRoute} component={Login}/>
                <Route path={appConstants.productsRoute} component={Products}/>
                <Route path={`${appConstants.productDetailRoute}/:id`} component={Product}/>
                <Route path={appConstants.accountRoute} component={Account}/>
                <Route path={appConstants.cartRoute} component={Cart}/>
                <Route path="*">
                    <Redirect to={appConstants.homeRoute}/>
                </Route>
            </Switch>
          </main>

        </>)
  }

}

export default App;
