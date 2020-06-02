
import {appConstant} from "../appConstants/appConstants";

export const productsReducer=(state=null, action)=>{
    switch (action.type) {
        case appConstant.GET_PRODUCTS:
            return action.payload.data;
        case appConstant.GET_PRODUCT:
            return action.payload.data;



        default: return state;

    }
}