import axios from "axios";
import {appConstant} from "../appConstants/appConstants";


export const getUserOrders=(id)=>{

    const getUserOrdersPromise=axios.get(`http://localhost:8080/orders/${id}`,{withCredentials:true});
    return {
        type:appConstant.GET_USER_ORDERS,
        payload:getUserOrdersPromise,
    }
}

export const getOrders=()=>{
    const getOrdersPromise=axios.get(`http://localhost:8080/orders`,{withCredentials:true});
    return {
        type:appConstant.GET_ORDERS,
        payload:getOrdersPromise,
    }
}

export const addOrder=(newOrder)=>{
    console.log('this is in order action to de add new order')
    console.log(newOrder);
    const addOrdersPromise=axios.post(`http://localhost:8080/orders`,newOrder,{withCredentials:true});
    return {
        type:appConstant.ADD_ORDER,
        payload:addOrdersPromise,
    }
}