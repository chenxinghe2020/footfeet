import React, {useState} from "react";
import {connect, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {getProducts} from "../actions/products.action";
import './Products.scss'
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import {SideBar} from "./sidebar/SideBar";
import {Link} from "react-router-dom";
import {appConstant} from "../appConstants/appConstants";

class Products extends React.Component{

    componentDidMount() {
        !this.props.products&&this.props.getProducts();
    }


    render() {
        return(
            <Grid container spacing={2} className="main">
                <Grid item lg={2} md={2} sm={false} xs={false}>
                    <Paper className="sideBar">
                        <SideBar/>
                    </Paper>
                </Grid>
                <Grid item container spacing={2} lg={9} md={10} sm={12} xs={12} className="Products">

                    {
                        this.props.products&&this.props.products.map(p => (
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


}


function mapStateToProps({products}){
    return {products};
}
export default connect(mapStateToProps,{getProducts})(Products);