import React, {useState} from "react";
import './AddProduct.scss'
import ProductInfo from "../productInfo/ProductInfo";
import Fab from "@material-ui/core/Fab";
import SendIcon from '@material-ui/icons/Send';
import {addProduct} from "../../actions/products.action";

const AddProduct=()=>{
    const [editable,setEditable] =useState(true)
    const [product,setProduct]=React.useState({
        id:'',
        name:'',
        price:100,
        description:'',
        brand:'',
        size:8,
        color:'',
        stock:0,
        releaseDate:new Date(),
        soldNumber:0,
        image1:'',
        image2:'',
        image3:'',
        image4:'',
    })

    const handleSubmit=()=>{
        console.log(product)
        addProduct(product);
    }
    return(
        <div>
            <ProductInfo product={product} setProduct={setProduct} editable={true}/>
            <Fab
                variant="extended"
                size="large"
                aria-label="AddProduct"
                className='add-btn'
                onClick={handleSubmit}
                style={{backgroundColor:"black",color:"white",position:"fixed",right:25,bottom:25}}
            >
                Add Product <SendIcon style={{margin:10}}/>
            </Fab>
        </div>


    )
}

export default AddProduct;