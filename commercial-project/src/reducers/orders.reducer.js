import {appConstant} from "../appConstants/appConstants";


export const orderReducer = (state = null, action) => {
    switch(action.type) {
        case appConstant.GET_ORDERS:
            return action.payload.success ? action.payload.data : null;
        case appConstant.ADD_ORDER:
            return state;
        default:
            return state;
    }
};