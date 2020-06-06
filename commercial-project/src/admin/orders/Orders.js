import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getOrders} from "../../actions/orders.action";

const Orders=()=>{

    const dispatch=useDispatch();
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            orders:appState.orders
        };
    });
    useEffect(()=>{
        dispatch(getOrders());
    },[])

    useEffect(()=>{
        console.log(loginState.orders)
    },[loginState.orders])
    return(
        <div>
            ORDERS
            <div>
                ORDERS
            </div>
            <div>
                ORDERS
            </div>
            <div>
                ORDERS
            </div>
            <div>
                ORDERS
            </div>
        </div>
    )
}

export default Orders;