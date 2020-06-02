import axios from "axios";
import {appConstant} from "../appConstants/appConstants";


export const addToCart=(newOrderProduct)=>{
    console.log(newOrderProduct);
    const addCartPromise=axios.post(`http://localhost:8080/orderProducts`, newOrderProduct ,{withCredentials:true});
    return {
        type:appConstant.ADD_TO_CART,
        payload: addCartPromise
    }
}

export const deleteFromCart=(id)=>{

    const deletePromise=axios.put(`http://localhost:8080/orderProducts/${id}` ,{withCredentials:true});
    return {
        type:appConstant.DELETE_FROM_CART,
        payload: deletePromise
    }
}

export const getCart=(id)=>{

    const getCartPromise=axios.get(`http://localhost:8080/orderProducts/${id}`,{withCredentials:true});

    return {
        type:appConstant.GET_CART,
        payload:getCartPromise,
    }

}