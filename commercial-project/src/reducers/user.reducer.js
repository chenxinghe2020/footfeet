import {appConstant} from "../appConstants/appConstants";


export const userReducer = (state = null, action) => {
    switch(action.type) {
        case appConstant.CHECK_LOGIN:
            return action.payload.success ? action.payload.user : null;
        case appConstant.REGISTER:
            return action.payload.success ? action.payload: null;
        default:
            return state;
    }
};