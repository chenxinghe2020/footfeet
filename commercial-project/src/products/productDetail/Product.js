import React from "react";
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";
import {getProducts} from "../../actions/products.action";
import Paper from "@material-ui/core/Paper";
import './Product.scss'
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import {addToCart, getCart} from "../../actions/cart.action";
import {addToTempCart, getTempCart} from "../../actions/tempCart.action";
class Product extends React.Component{
    state={
        currentProduct:this.props.product,
        showProducts:this.props.products,
        size:0,
        cartItem:{
            id:'',
            userId:'',
            qty:'',
            status:'',
            product:'',
            order:'',
        }
    }
    colors=[];
    sizes=[];
    componentDidMount() {
        !this.props.products && this.props.getProducts();
        this.props.user&&this.props.getCart(this.props.user.id);

        let showProducts=this.props.products.filter(p=>{
            return p.name===this.props.product.name;
        })

        showProducts.forEach(p=>{
            if(this.colors.indexOf(p.color)===-1){
                this.colors.push(p.color);
            }
            if(this.sizes.indexOf(p.size)===-1){
                this.sizes.push(p.size);
                this.sizes.sort();
            }
        })


        this.setState({
            ...this.state,
            currentProduct:this.props.product,
            showProducts:showProducts,
            size:this.sizes[0]
        })
    }


    productShowHandler=(id)=>{
        console.log(id);
        let product=this.state.showProducts.find(product=>{
            return product.id===+id;
        })
        this.setState({
            ...this.state,
            currentProduct:product,
        })
    }

    sizeChangeHandler=(event)=>{
        let size=+event.target.value;
        console.log(size)
        this.setState({
            ...this.state,
            size:size
        })
    }

    handleAddToCart=()=>{
        // console.log(this.props.user);
        // console.log(this.state.currentProduct);

        if(this.props.user){
            const cartItem={
                id:'',
                userId:this.props.user.id,
                qty:1,
                status:'unpaid',
                product:this.state.currentProduct,
                order:'',
            }
            this.props.addToCart(cartItem);
            this.props.getCart(this.props.user.id);
        }else{
            const cartItem={
                id:'',
                userId:' ',
                qty:1,
                status:'unpaid',
                product:this.state.currentProduct,
                order:'',
            }
            this.props.addToTempCart(cartItem);
        }

    }


    render(){


        return(
            <Grid container className='main' spacing={4}>
                <Grid item container spacing={1} lg={7} md={7} sm={6} xs={6} className='showImg'>
                    <Grid item lg={5} md={5} sm={11} xs={11}>
                        <Paper className="product-wrapper">
                            <img src={this.state.currentProduct.image1} alt={this.state.currentProduct.name} className="product-image"/>
                        </Paper>
                    </Grid>
                    <Grid item lg={5} md={5} sm={11} xs={11}>
                        <Paper className="product-wrapper">
                            <img src={this.state.currentProduct.image2} alt={this.state.currentProduct.name} className="product-image"/>
                        </Paper>
                    </Grid>
                    <Grid item lg={5} md={5} sm={11} xs={11}>
                        <Paper className="product-wrapper">
                            <img src={this.state.currentProduct.image3} alt={this.state.currentProduct.name} className="product-image"/>
                        </Paper>
                    </Grid>
                    <Grid item lg={5} md={5} sm={11} xs={11}>
                        <Paper className="product-wrapper">
                            <img src={this.state.currentProduct.image3} alt={this.state.currentProduct.name} className="product-image"/>
                        </Paper>
                    </Grid>
                </Grid>





                <Grid item lg={4} md={5} sm={6} xs={6} className='showInfo'>

                    <Typography variant="h2">
                        {this.props.product.name}
                    </Typography>

                    <br/>
                    <br/>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="h5">
                            Select Style:
                        </Typography>
                    </Grid>
                    <br/>
                    <Grid item container lg={12} md={12} sm={12} xs={12} spacing={1} className='showSmall'>
                        {this.state.showProducts.map(product=>
                            (
                                <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>
                                    <div className="small-wrapper" value={product.id} onClick={this.productShowHandler.bind(this,product.id)}>
                                        <img src={product.image1} alt={product.name} className="small-image"/>
                                    </div>
                                </Grid>
                            )
                        )}
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="h5">
                            Select Size:
                        </Typography>
                    </Grid>

                    <FormControl component="fieldset">
                        <RadioGroup row aria-label="position" name="position" defaultValue="top"
                                    value={this.state.size}
                                    onChange={this.sizeChangeHandler}
                        >
                            {
                                this.sizes.map(size=>(
                                    <FormControlLabel key={size} value={size} control={<Radio color="primary" />} label={size} />
                                ))
                            }
                        </RadioGroup>
                    </FormControl>
                    <br/>
                    <br/>
                    <br/>
                    <Grid item lg={12} md={12} sm={12} xs={12} className='addtocart'>
                        <Button
                            variant="contained"
                            style={{color:"white",
                                backgroundColor:'black'}}
                            size="large"
                            endIcon={<ArrowRightAltIcon />}
                            onClick={this.handleAddToCart}
                        >
                            Add To Cart
                        </Button>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Typography variant="h5">
                            {this.state.currentProduct.description}
                        </Typography>
                    </Grid>

                </Grid>

            </Grid>
        )









    }
}
function mapStateToProps(appstate, ownProps) {
    const id=+ownProps.match.params.id;
    const product = appstate.products && appstate.products.find(p => +ownProps.match.params.id === p.id);
    const products=appstate.products;
    const user=appstate.user;
    return {id,product,products,user};
}
export default connect(mapStateToProps, {getProducts,addToCart,getCart,addToTempCart,getTempCart})(Product);



// <Typography variant="h6">
//     Select Size
// </Typography>
// <ToggleButtonGroup
//     value={this.state.size}
//     exclusive
//     // onChange={handleAlignment}
//     aria-label="text alignment"
// >
//     {this.sizes.map(size=>
//         (
//             <ToggleButton value="size" aria-label="left aligned">
//                 {size}
//             </ToggleButton>
//         )
//     )}
// </ToggleButtonGroup>
































{/*<Grid item container lg={4} md={5} sm={6} xs={6} className='showInfo'>*/}
{/*    <Grid item lg={12} md={12} sm={12} xs={12} style={{backgroundColor:'blue'}}>*/}
{/*        <Typography variant="h2">*/}
{/*            {this.props.product.name}*/}
{/*        </Typography>*/}
{/*    </Grid>*/}
{/*    <Grid item lg={12} md={12} sm={12} xs={12} className='showSmall'>*/}
{/*        {this.state.showProducts.map(product=>*/}
{/*            (*/}
{/*                <Grid item lg={3} md={4} sm={6} xs={12} key={product.id}>*/}
{/*                    <Paper className="small-wrapper">*/}
{/*                        <img src={product.image1} alt={product.name} className="small-image"/>*/}
{/*                    </Paper>*/}
{/*                </Grid>*/}
{/*            )*/}
{/*        )}*/}
{/*    </Grid>*/}
{/*</Grid>*/}





