import axios from "axios";
import {appConstant} from "../appConstants/appConstants";


export const getOrders=(id)=>{

    const getOrdersPromise=axios.get(`http://localhost:8080/orders/${id}`,{withCredentials:true});
    return {
        type:appConstant.GET_PRODUCTS,
        payload:getOrdersPromise,
    }
}

export const addOrder=(id)=>{

    const getOrdersPromise=axios.get(`http://localhost:8080/orders/${id}`,{withCredentials:true});
    return {
        type:appConstant.GET_PRODUCTS,
        payload:getOrdersPromise,
    }
}