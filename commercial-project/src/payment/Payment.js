
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import './Payment.scss'
import Typography from "@material-ui/core/Typography";
import Address from "../address/Address";
import CardInfo from "./cardInfo/CardInfo";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Fab from "@material-ui/core/Fab";
import Divider from "@material-ui/core/Divider";
import {getShipping} from "../actions/shipping.action";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


const Payment=(props)=>{
    const dispatch = useDispatch();
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            cart: appState.cart,
            userInfo:appState.userInfo,
            shipping:appState.shipping
        };
    });
    const [summary,setSummary]= React.useState({
        subtotal:0,
        shipping:0,
        tax:0,
        total:0,
    })
    React.useEffect(()=>{
        dispatch(getShipping());
    },[])

    const [shippingValue,setShippingValue] =React.useState(4)

    const handleShippingOption=(event)=>{
        setShippingValue(+event.target.value);
        console.log(event.target.value);
        // console.log(loginState.shipping)

            setSummary({
                ...summary,
                shipping: loginState.shipping[event.target.value-1].price,
                total:summary.subtotal+summary.tax+loginState.shipping[event.target.value-1].price,
            })


    }


    const [shipping,setShipping]= React.useState({
        firstName:loginState.userInfo.firstName,
        lastName:loginState.userInfo.lastName,
        address:loginState.userInfo.address,
        state:loginState.userInfo.state,
        city:loginState.userInfo.city,
        zip:loginState.userInfo.zip,
        country:loginState.userInfo.country
    })
    const [billing,setBilling]= React.useState({
        firstName:loginState.userInfo.firstName,
        lastName:loginState.userInfo.lastName,
        address:loginState.userInfo.address,
        state:loginState.userInfo.state,
        city:loginState.userInfo.city,
        zip:loginState.userInfo.zip,
        country:loginState.userInfo.country
    })
    const [card,setCard]=React.useState({
        cardNumber:'',
        expirationDate:'',
        securityCode:''
    })

    React.useEffect(()=>{
        let subtotal=0;
        loginState.cart&&loginState.cart.forEach((item)=>{
            subtotal=subtotal+item.product.price;
        })
        loginState.cart&&setSummary({
            subtotal:subtotal,
            shipping:0,
            tax:subtotal*0.09,
            total:subtotal+subtotal*0.09+summary.shipping,
        })
    },[loginState.cart])

    const getFormattedDate=(days)=> {
        let todayTime = new Date();
        todayTime.setDate(todayTime.getDate() + days)
        let month = todayTime .getMonth()+1;
        let day = todayTime .getDate();
        let year = todayTime .getFullYear();
        return month + "/" + day + "/" + year;
    }

    return(
        <Grid container className='payment'>
            <Grid item lg={8} md={8} sm={8} xs={8} className='payment-info' >
                <Typography variant="h4" style={{backgroundColor:'black',color:'white'}}>
                    Shipping Address:
                </Typography>
                <br/>
                <Address address={shipping} setAddress={setShipping}/>
                <br/>
                <Typography variant="h4" style={{backgroundColor:'black',color:'white'}}>
                    shipping Options:
                </Typography>
                <Grid container className='center'>
                    <Grid item lg={10} md={10} sm={10} xs={10}>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={shippingValue} onChange={handleShippingOption}>
                                {
                                    loginState.shipping&&loginState.shipping.map(item=>{
                                        let date=getFormattedDate(+item.id);
                                        let label=`${item.type}\u00A0\u00A0\u00A0\u00A0price:$${item.price}\u00A0\u00A0\u00A0\u00A0Estimated Date:${date}`
                                        return (
                                            <FormControlLabel value={+item.id} control={<Radio />} label={label} />
                                        );
                                    })

                                }
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>


                <br/>
                <Typography variant="h4" style={{backgroundColor:'black',color:'white'}}>
                    Credit Card Infomation:
                </Typography>
                <br/>
                <CardInfo/>
                <br/>
                <Typography variant="h4" style={{backgroundColor:'black',color:'white'}}>
                    Billing Address:
                </Typography>
                <br/>
                <Address address={billing} setAddress={setBilling}/>
                <br/>

            </Grid>
            <Grid item lg={2} md={2} sm={2} xs={2} className='summary'>
                <Typography variant="h4">
                    Summary:
                </Typography>
                <br/>
                <div className='summary-subtotal'>
                    <div className='summary-name'>
                        Subtotal:
                    </div>
                    <div className='summary-price'>
                        ${summary.subtotal}
                    </div>
                </div>
                <br/>
                <div className='summary-subtotal'>
                    <div className='summary-name'>
                        Estimated Shipping:
                    </div>
                    <div className='summary-price'>
                        ${summary.shipping}
                    </div>
                </div>
                <br/>
                <div className='summary-subtotal'>
                    <div className='summary-name'>
                        Estimated Taxes:
                    </div>
                    <div className='summary-price'>
                        ${summary.tax}
                    </div>
                </div>
                <br/>
                <Divider/>
                <div className='summary-subtotal'>
                    <div className='summary-name'>
                        Total:
                    </div>
                    <div className='summary-price'>
                        ${summary.total}
                    </div>
                </div>
                <br/>
                <br/>
                <div className='btn-line'>
                    <Fab
                        variant="extended"
                        size="large"
                        color="secondary"
                        aria-label="PlaceOrder"
                        type="submit"
                        className='check-out-btn'
                    >
                        Place Order
                    </Fab>
                </div>
            </Grid>

        </Grid>
    )
}

export default Payment;















