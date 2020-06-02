import axios from "axios";
import {appConstant} from "../appConstants/appConstants";


export const register=(newUser)=>{
    const registerPromise=axios.post(`http://localhost:8080/users`, newUser ,{withCredentials:true});
    return {
        type:appConstant.REGISTER,
        payload: registerPromise
    }
}



export const checkLogin = () => {
    const checkLoginPromise = fetch('http://localhost:8080/checklogin', {credentials: 'include'})
        .then(res => res.json())
        .catch();
    return {
        type: appConstant.CHECK_LOGIN,
        payload: checkLoginPromise
    };
};