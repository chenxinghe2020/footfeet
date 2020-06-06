import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {Link, NavLink} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import {appConstant as appConstants, appConstant} from "../appConstants/appConstants";
import './Header.scss'
import InputAdornment from "@material-ui/core/InputAdornment";
import Tab from "@material-ui/core/Tab";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Tabs from "@material-ui/core/Tabs";
import Grid from "@material-ui/core/Grid";
import Login from "../auth/Login";
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/auth.action";
import Register from "../auth/Register";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {checkLogin} from "../actions/user.action";

const tabs=[
    {label:"Trending"},
    {label:"Men"},
    {label:"Women"},
    {label:"Kids"},
    {label:"Brand"},
]
const tabContent=[
    {name:'running'},{name:'soccer'},
    {name:'Gym'},{name:'LifeStyle'},
    {name:'Hiking&OutDoor'},{name:'Basketball'},
]

const tabFeature=[
    {name:'New Release'},{name:'Best Seller'},
]

const brands=[
    {name:'Nike'},{name:'Adidas'},
    {name:'New Balance'},{name:'Jordan'},
]
const Header=()=>{
    const [register,setRegister]=React.useState(false);
    const [dialog, setDialog] = React.useState(false);
    const dispatch = useDispatch();
    const handleClickOpen = () => {
        setDialog(true);
    };

    const handleClose = () => {
        setDialog(false);
    };

    const handleRegisterOpen=()=>{
        setRegister(true);
    }

    const handleRegisterClose=()=>{
        setRegister(false);
    }


   const [tab,setTab]=useState({
       value:1,
       open:false,
       anchorEl:null
   })

    const handleMenuOpen=(index,event)=>{
        const {currentTarget}=event;
        setTab({
            open:true,
            value:index,
            anchorEl:currentTarget
        })
    }
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            auth:appState.auth,
            msg: appState.user ?
                appConstant.LOGIN_SUCCESS_MESSAGE:
                appConstant.LOGIN_FAILURE_MESSAGE
        };
    });

    const handleMenuClose=(index,event)=>{
        setTab({
            open:false,
            anchorEl: null,
            value:0
        });
    }

    const handleLogout=()=>{
        dispatch(logout());
    }
    React.useEffect(()=>{
        if(loginState.user){
            setDialog(false);
        }
    },[loginState.user])

    React.useEffect(()=>{
        dispatch(checkLogin());
    },[loginState.auth])


    return (
        <div>
            <AppBar position="fixed" style={{backgroundColor: 'black'}}>
                <div className="topline">
                    <NavLink to={appConstant.loginRoute}
                             className='linkItem'
                             style={{color : 'white',textDecoration: 'none'}}>
                        HELP
                    </NavLink>
                    {loginState.user?(loginState.user.profiles[0].type==='ROLE_ADMIN'?
                            <Link to={appConstant.adminRoute} className='linkItem' style={{color : 'white',textDecoration: 'none'}}>
                                Account
                            </Link>
                            :
                            <Link to={appConstant.accountRoute} className='linkItem' style={{color : 'white',textDecoration: 'none'}}>
                                Account
                            </Link>
                        )
                        :
                        <></>
                    }
                    {loginState.user?
                        <Button onClick={handleLogout} component={Link} to={appConstant.homeRoute} className='linkItem' style={{color : 'white'}}>
                            Logout
                        </Button>
                        :
                        <Button onClick={handleClickOpen}  className='linkItem' style={{color : 'white'}}>
                        Welcome,Login
                        </Button>
                    }

                    <Login open={dialog} handleClose={handleClose} handleRegisterOpen={handleRegisterOpen} />
                    <Register open={register} handleClose={handleRegisterClose}/>
                </div>
                <Toolbar
                    // className={classes.toolbar}
                    onMouseLeave={handleMenuClose.bind(this,tab)}
                >
                    <Grid container className='secondLine'>
                        <Grid item lg={1} md={1} sm={false} xs={false}>
                            <Link to={appConstants.homeRoute} style={{textDecoration: 'none'}}>
                                <Typography variant="h6" style={{backgroundColor:'black',color:'white'}}>
                                    Foot & Feet
                                </Typography>
                            </Link>

                        </Grid>
                        <Grid item lg={7} md={7} sm={11} xs={11}>
                            <Paper>
                                <Tabs
                                    value={tab.value}
                                    centered
                                >
                                    {tabs.map((tab,index)=>
                                        (

                                                <Tab
                                                    label={tab.label}
                                                    key={tab.label}
                                                    onMouseEnter={handleMenuOpen.bind(this, index)}
                                                    style={{ textDecoration: 'none' }}
                                                />


                                        )
                                    )}
                                </Tabs>
                                <Popper open={tab.open} anchorEl={tab.anchorEl}>
                                    <Paper>
                                        <MenuList>
                                            {tab.value<1?
                                                tabFeature.map((item, index) => (
                                                <MenuItem key={index}>
                                                    <Link to={appConstants.productsRoute} key={tab.label} style={{textDecoration: 'none',color:'black'}}>
                                                        {item.name}
                                                    </Link>
                                                </MenuItem>
                                                ))
                                            :(tab.value<4?
                                                tabContent.map((item, index) => (
                                                    <MenuItem key={index}>
                                                        <Link to={appConstants.productsRoute} key={tab.label} style={{textDecoration: 'none',color:'black'}}>
                                                            {item.name}
                                                        </Link>
                                                    </MenuItem>
                                                ))
                                                :
                                                brands.map((item, index) => (
                                                    <MenuItem key={index}>
                                                        <Link to={appConstants.productsRoute} key={tab.label} style={{textDecoration: 'none',color:'black'}}>
                                                            {item.name}
                                                        </Link>
                                                    </MenuItem>
                                                ))

                                            )
                                            }
                                        </MenuList>
                                    </Paper>
                                </Popper>
                            </Paper>
                        </Grid>
                        <Grid item lg={2} md={5} sm={11} xs={11}>
                            <InputAdornment>
                                <input type="text" placeholder='search' className='margin-x'/>
                                <NavLink to={appConstant.cartRoute}  className='margin-x'>
                                    <SearchIcon style={{color : 'white'}}/>
                                </NavLink>
                                <NavLink to={appConstant.cartRoute}  className='margin-x' >
                                    <ShoppingCartIcon style={{color : 'white'}}/>
                                </NavLink>
                            </InputAdornment>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>

    );
}
export default Header;



