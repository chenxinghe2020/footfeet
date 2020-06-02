import {combineReducers} from "redux";
import {productsReducer} from "./products.reducer";
import {authReducer} from "./auth.reducer";
import {userInfoReducer} from "./userInfo.reducer";
import {userReducer} from "./user.reducer";
import {cartReducer} from "./cart.reducer";

export const rootReducers=combineReducers({
    products:productsReducer,
    auth:authReducer,
    user: userReducer,
    userInfo:userInfoReducer,
    cart:cartReducer,

})