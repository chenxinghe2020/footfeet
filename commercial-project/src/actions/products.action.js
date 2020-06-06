
import {appConstant} from "../appConstants/appConstants";
import axios from 'axios'
import env from'../appConstants/environment'

// const API='http://localhost:8080';
export const getProducts=()=>{

    // const getProductPromise=axios.get(`${env.ROOT}/products`,{withCredentials:true});
    const getProductPromise=axios.get(`http://localhost:8080/products`,{withCredentials:true});
    return {
        type:appConstant.GET_PRODUCTS,
        payload:getProductPromise,
    }
}

export const addProduct=(newProduct)=>{
    const addProductPromise=axios.post(`http://localhost:8080/products`,newProduct,{withCredentials:true});
    return {
        type:appConstant.ADD_PRODUCT,
        payload:addProductPromise,
    }
}

