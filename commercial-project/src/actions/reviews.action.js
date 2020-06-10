import axios from "axios";
import {appConstant} from "../appConstants/appConstants";

export const addReview=(newReview)=>{
    console.log(newReview);
    const addReviewPromise=axios.post(`http://localhost:8080/reviews`, newReview ,{withCredentials:true});
    return {
        type:appConstant.ADD_REVIEW,
        payload: addReviewPromise
    }
}



export const getReviewsByProductId=(id)=>{
    const getReviewPromise=axios.get(`http://localhost:8080/reviews/${id}`,{withCredentials:true});
    return {
        type:appConstant.GET_REVIEW_BY_PRODUCT_ID,
        payload:getReviewPromise,
    }

}