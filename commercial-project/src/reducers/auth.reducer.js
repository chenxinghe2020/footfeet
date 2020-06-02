import {appConstant} from "../appConstants/appConstants";


export const authReducer = (state = null, action) => {
    switch(action.type) {
        case appConstant.LOGIN:
            return action.payload.success?action.payload:null;
        case appConstant.LOGOUT:
            // TODO: need to check if user is logged out from backend
            return action.payload.success?action.payload:null;
        default:
            return state;
    }
};