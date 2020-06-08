import {appConstant} from "../appConstants/appConstants";

export const tempCartReducer = (state = [], action) => {
    switch(action.type) {
        case appConstant.ADD_TO_TEMP_CART:
            console.log([...state,action.payload])
            return [...state,action.payload];
        case appConstant.GET_TEMP_CART:
            return state;
        case appConstant.DELETE_FROM_TEMP_CART:
            let index=state.findIndex(item=>{
                return item.id===action.payload;
            })
            state.splice(index,1);
            return state;
        default:
            return state;
    }
};