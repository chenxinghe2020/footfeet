import React, {useEffect, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {getProducts} from "../actions/products.action";
import './Products.scss';
import {SideBar} from "./sidebar/SideBar";
import {Link} from "react-router-dom";
import {appConstant} from "../appConstants/appConstants";

const Products =(props)=> {
    const dispatch=useDispatch();
    useEffect(()=>{
        !loginState.products&&dispatch(getProducts())
    },[])

    const loginState=useSelector(appState=>{
        return{
            products:appState.products
        }
    })

        return(
            <Grid container spacing={2} className="product-main">
                <Grid item lg={2} md={2} sm={false} xs={false}>
                    <Paper className="product-sideBar">
                        <SideBar/>
                    </Paper>
                </Grid>
                <Grid item container spacing={2} lg={9} md={10} sm={12} xs={12} className="Products">
                    {
                        loginState.products&&loginState.products.map(p => (
                            <Grid item lg={3} md={4} sm={6} xs={12} key={p.id}>
                                <Link to={`${appConstant.productDetailRoute}/${p.id}`}>
                                    <Paper className="product-wrapper">
                                        <img src={p.image1} alt={p.name} className="product-image"/>
                                        <div className="product-overlay"/>
                                        <div className="product-info">
                                            <h3 style={ {margin: 0} }>{p.name}</h3>
                                            <div>{p.name}</div>
                                            <div>${p.price}</div>
                                        </div>
                                    </Paper>
                                </Link>

                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        )

}
export default Products;

