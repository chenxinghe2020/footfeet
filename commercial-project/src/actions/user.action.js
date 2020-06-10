import axios from "axios";
import {appConstant} from "../appConstants/appConstants";


export const register=(newUser)=>{
    const registerPromise=axios.post(`http://localhost:8080/users`, newUser ,{withCredentials:true});
    return {
        type:appConstant.REGISTER,
        payload: registerPromise
    }
}

export const forgotPassword=(emailArr)=>{
    const forgotPassPromise=axios.post(`http://localhost:8080/sendMail`, emailArr ,{withCredentials:true});
    return {
        type:appConstant.FORGOT_PASSWORD,
        payload: forgotPassPromise
    }
}

export const changePassword=(newUser)=>{
    const changePasswordPromise=axios.put(`http://localhost:8080/users`, newUser ,{withCredentials:true});
    return {
        type:appConstant.CHANGE_PASSWORD,
        payload: changePasswordPromise
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