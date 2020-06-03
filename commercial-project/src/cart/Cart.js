 import React from "react";
 import {Grid} from "@material-ui/core";
 import Typography from "@material-ui/core/Typography";
 import './Cart.scss';
 import {useDispatch, useSelector} from "react-redux";
 import {appConstant} from "../appConstants/appConstants";
 import {getCart} from "../actions/cart.action";
 import Divider from "@material-ui/core/Divider";
 import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
 import Fab from "@material-ui/core/Fab";
 import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
 import {Link} from "react-router-dom";
 import ListItem from "@material-ui/core/ListItem";

const Cart=()=>{
    const dispatch = useDispatch();
    const [payment,setPayment]= React.useState({
        subtotal:0,
        shipping:0,
        tax:0,
    })

    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            cart: appState.cart
        };
    });
    React.useEffect(()=>{
        dispatch(getCart(loginState.user.id));
    },[])
    React.useEffect(()=>{
        let subtotal=0;
        loginState.cart&&loginState.cart.forEach((item)=>{
            subtotal=subtotal+item.product.price;
        })
        loginState.cart&&setPayment({
            subtotal:subtotal,
            shipping:0,
            tax:0,
        })
    },[loginState.cart])



    return(
        <Grid container className='cart-main' spacing={1}>
            <Grid item lg={6} md={8} sm={8} xs={8} className='cart-info'>
                <Typography variant="h2" style={{backgroundColor:'black',color:'white'}}>
                    Cart:
                </Typography>
                {
                    loginState.cart&&loginState.cart.map(item=>(
                        <Grid container className='item-wrap' key={item.product.name+item.product.size}>
                            <Grid item lg={2} md={3} sm={3} xs={3} >
                                <img src={item.product.image1} alt={item.product.name}  className='item-image'/>
                            </Grid>
                            <Grid item container lg={8} md={8} sm={8} xs={8} className='item-info'>
                                <div className='item-info-row'>
                                    <div className='item-name'>
                                        {item.product.name}
                                    </div>
                                    <div className='item-price'>
                                        ${item.product.price}
                                    </div>
                                </div>
                                <div className='item-size'>
                                    Size: {item.product.size}
                                </div>
                                <div className='item-qty'>
                                    Qty: {item.qty}
                                </div>
                                <div className='item-qty'>
                                    Color: {item.product.color}
                                </div>
                                <div className='item-qty'></div>
                            </Grid>
                        </Grid>
                    ))
                }
                <br/>
                <br/>
                <br/>
                <br/>
            </Grid>
            <Grid item lg={3} md={4} sm={4} xs={4} className='cart-summary'>
                <Typography variant="h2">
                    Summery
                </Typography>
                <br/>
                <div className='summary-subtotal'>
                    <div className='summary-name'>
                        Subtotal:
                    </div>
                    <div className='summary-price'>
                        ${payment.subtotal}
                    </div>
                </div>
                <br/>
                <div className='summary-subtotal'>
                    <div className='summary-name'>
                        Estimated Shipping:
                    </div>
                    <div className='summary-price'>
                        ${payment.shipping}
                    </div>
                </div>
                <br/>
                <div className='summary-subtotal'>
                    <div className='summary-name'>
                        Estimated Taxes:
                    </div>
                    <div className='summary-price'>
                        ${payment.tax}
                    </div>
                </div>
                <br/>
                <Divider/>
                <div className='summary-subtotal'>
                    <div className='summary-name'>
                        Total:
                    </div>
                    <div className='summary-price'>
                        $0
                    </div>
                </div>
                <br/>
                <Divider/>
                <br/>
                <div className='checkout-container'>
                    <Fab
                        variant="extended"
                        size="large"
                        color="secondary"
                        aria-label="Checkout"
                        type="submit"
                        className='check-out-btn'
                        button
                        component={Link} to={appConstant.paymentRoute}
                    >
                        Check Out
                    </Fab>
                </div>

            </Grid>
        </Grid>

    )
}


export default Cart;







