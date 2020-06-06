import axios from "axios";
import {appConstant} from "../appConstants/appConstants";


export const addToCart=(newOrderProduct)=>{
    console.log(newOrderProduct);
    const addCartPromise=axios.post(`http://localhost:8080/carts`, newOrderProduct ,{withCredentials:true});
    return {
        type:appConstant.ADD_TO_CART,
        payload: addCartPromise
    }
}

export const deleteFromCart=(id)=>{

    const deletePromise=axios.put(`http://localhost:8080/carts/${id}` ,{withCredentials:true});
    return {
        type:appConstant.DELETE_FROM_CART,
        payload: id
    }
}

export const getCart=(id)=>{

    const getCartPromise=axios.get(`http://localhost:8080/carts/${id}`,{withCredentials:true});
    console.log(getCartPromise)
    return {
        type:appConstant.GET_CART,
        payload:getCartPromise,
    }

}