import axios from "axios";
import {appConstant} from "../appConstants/appConstants";


export const getShipping=()=>{

    const getShippingPromise=axios.get(`http://localhost:8080/shippings`,{withCredentials:true});
    return {
        type:appConstant.GET_SHIPPING,
        payload:getShippingPromise,
    }
}