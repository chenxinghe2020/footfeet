 import React from "react";
 import {Grid} from "@material-ui/core";
 import Typography from "@material-ui/core/Typography";
 import './Cart.scss';
 import {useDispatch, useSelector} from "react-redux";
 import {appConstant} from "../appConstants/appConstants";
 import {getCart} from "../actions/cart.action";

const Cart=()=>{
    const dispatch = useDispatch();

    const [cart,setCart]= React.useState({
        cart:[]
    })

    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            cart: appState.cart
        };
    });
    React.useEffect(()=>{
        dispatch(getCart(loginState.user.id));
    })

    React.useEffect(()=>{
        loginState.user&&setCart(loginState.cart);
    },[loginState.cart])


    return(
        <Grid container className='cart-main' spacing={1}>
            <Grid item lg={6} md={8} sm={8} xs={8} className='cart-info'>
                <Typography variant="h1" style={{backgroundColor:'black',color:'white'}}>
                    Cart:
                </Typography>
                {
                    loginState.cart&&loginState.cart.map(item=>(
                        <Grid container className='item-wrap'>
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
                            </Grid>
                        </Grid>
                    ))
                }
                <div className='item-wrap'>

                </div>
            </Grid>
            <Grid item lg={3} md={4} sm={4} xs={4} className='cart-summary'>
                <Typography variant="h1" style={{backgroundColor:'black',color:'white'}}>
                    Summery
                </Typography>
            </Grid>
        </Grid>

    )
}


export default Cart;







