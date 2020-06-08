import axios from "axios";
import {appConstant} from "../appConstants/appConstants";


export const addToTempCart=(newOrderProduct)=>{
    return {
        type:appConstant.ADD_TO_TEMP_CART,
        payload: newOrderProduct
    }
}

export const deleteFromTempCart=(id)=>{
    return {
        type:appConstant.DELETE_FROM_TEMP_CART,
        payload: id
    }
}

export const getTempCart=()=>{
    return {
        type:appConstant.GET_TEMP_CART,
        payload:null,
    }

}