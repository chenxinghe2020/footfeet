import {appConstant} from "../appConstants/appConstants";


export const cartReducer = (state = null, action) => {
    switch(action.type) {
        case appConstant.ADD_TO_CART:
            console.log('this is in cart reducer---print state')
            console.log(state);
            return state;
        case appConstant.GET_CART:
            console.log('this is cart reducer---get all cart items');
            console.log(action.payload.data)
            return action.payload.data;
        case appConstant.DELETE_FROM_CART:
            return state;
        default:
            return state;
    }
};