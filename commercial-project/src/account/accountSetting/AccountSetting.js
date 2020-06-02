import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import './AccountSetting.scss'
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import UsernameIcon from "@material-ui/icons/Person";
import PasswordIcon from "@material-ui/icons/VpnKey";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Divider from "@material-ui/core/Divider";
import {useDispatch, useSelector} from "react-redux";
import {addUserInfo, getUserInfo} from "../../actions/userInfo.action";
import {login} from "../../actions/auth.action";
import {checkLogin} from "../../actions/user.action";


export const AccountSetting=(props)=>{

    const dispatch = useDispatch();
    const loginState = useSelector(appState => {
        return {
            user: appState.user,
            userInfo:appState.userInfo
        };
    });

    const [editable,setEditable]=React.useState(false);



    const [userInfo,setUserInfo]=React.useState({
        firstName:'',
        lastName:'',
        phoneNumber:'',
        email:'',
        address:'',
        city:'',
        zip:'',
        state:'',
        country:'',
    })

    // const [userInfo,setUserInfo]=React.useState({
    //     firstName:loginState.userInfo.firstName,
    //     lastName:loginState.userInfo.lastName,
    //     phoneNumber:loginState.userInfo.phoneNumber,
    //     email:loginState.userInfo.email,
    //     address:loginState.userInfo.address,
    //     city:loginState.userInfo.city,
    //     zip:loginState.userInfo.zip,
    //     state:loginState.userInfo.state,
    //     country:loginState.userInfo.country,
    //     user:loginState.user,
    // })

    React.useEffect(()=>{
        console.log("this is  in account setting.js use effect")
        console.log(loginState.userInfo);
        setUserInfo(loginState.userInfo);

    },[loginState.userInfo])


    const handleSubmit=()=>{
        setEditable(false);
        dispatch(addUserInfo(userInfo,loginState));

    }

    const handleEditableOpen=()=>{
        setEditable(true)
    }

    const handleFormControl = (event) => {
        const newUserInfo = {...userInfo};
        newUserInfo[event.target.name] = event.target.value;
        setUserInfo(newUserInfo);
    };


    return (
        <Grid container className='info'>
            <Grid item lg={12} md={12} sm={12} xs={12} >
                <Typography variant="h3" className='info-title' >
                    Account setting
                    <Divider/>
                </Typography>
                <br/>
            </Grid>

            <form>
                <Grid item container spacing={1} lg={10} md={10} sm={10} xs={10} className='info-name'>
                    <Grid item lg={5} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic"
                                   label="First Name"
                                   name='firstName'
                                   variant="outlined"
                                   className='info-name-field'
                                   disabled={!editable}
                                   onChange={handleFormControl}
                                   value={userInfo.firstName}
                        />
                    </Grid>
                    <Grid item lg={5} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic"
                                   label="Last Name"
                                   name='lastName'
                                   variant="outlined"
                                   className='info-name-field'
                                   disabled={!editable}
                                   onChange={handleFormControl}
                                   value={userInfo.lastName}
                        />
                    </Grid>
                </Grid>
                <br/>
                <Grid item lg={8} md={8} sm={8} xs={8}>
                    <TextField id="outlined-basic"
                               label="Email"
                               name='email'
                               variant="outlined"
                               className='info-text-field'
                               disabled={!editable}
                               onChange={handleFormControl}
                               value={userInfo.email}
                    />
                </Grid>
                <br/>
                <Grid item lg={8} md={8} sm={8} xs={8}>
                    <TextField id="outlined-basic"
                               label="Phone Number"
                               variant="outlined"
                               name='phoneNumber'
                               className='info-text-field'
                               disabled={!editable}
                               onChange={handleFormControl}
                               value={userInfo.phoneNumber}
                    />
                </Grid>
                <br/>
                <Grid item lg={8} md={8} sm={8} xs={8}>
                    <TextField id="outlined-basic"
                               label="Address"
                               name='address'
                               variant="outlined"
                               className='info-text-field'
                               disabled={!editable}
                               onChange={handleFormControl}
                               value={userInfo.address}
                    />
                </Grid>
                <br/>
                <Grid item container spacing={1} lg={10} md={10} sm={10} xs={10} className='info-name'>
                    <Grid item lg={5} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic"
                                   label="City"
                                   variant="outlined"
                                   name='city'
                                   className='info-name-field'
                                   disabled={!editable}
                                   onChange={handleFormControl}
                                   value={userInfo.city}
                        />
                    </Grid>
                    <Grid item lg={5} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic"
                                   label="Zip"
                                   name='zip'
                                   variant="outlined"
                                   className='info-name-field'
                                   disabled={!editable}
                                   onChange={handleFormControl}
                                   value={userInfo.zip}
                        />
                    </Grid>
                </Grid>
                <br/>
                <Grid item container spacing={1} lg={10} md={10} sm={10} xs={10} className='info-name'>
                    <Grid item lg={5} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic"
                                   label="Country/Region"
                                   name='country'
                                   variant="outlined"
                                   className='info-name-field'
                                   disabled={!editable}
                                   onChange={handleFormControl}
                                   value={userInfo.country}
                        />
                    </Grid>
                    <Grid item lg={5} md={6} sm={6} xs={6}>
                        <TextField id="outlined-basic"
                                   label="State"
                                   name='state'
                                   variant="outlined"
                                   className='info-name-field'
                                   disabled={!editable}
                                   onChange={handleFormControl}
                                   value={userInfo.state}
                        />
                    </Grid>
                </Grid>
                <br/>
                <br/>
                <br/>
                <Grid container>
                    <Grid item lg={5} md={6} sm={6} xs={6}>
                        {
                            editable ?
                                <Fab
                                    variant="extended"
                                    size="medium"
                                    color="secondary"
                                    aria-label="Save"
                                    onClick={handleSubmit}
                                    style={{backgroundColor:'black',color:'white'}}
                                >
                                    Save
                                    <ArrowForwardIcon />
                                </Fab>
                            :
                                <Fab
                                    variant="extended"
                                    size="medium"
                                    color="secondary"
                                    aria-label="Signup"
                                    onClick={handleEditableOpen}
                                    style={{backgroundColor:'black',color:'white'}}
                                >
                                    Edit
                                    <ArrowForwardIcon />
                                </Fab>
                        }

                    </Grid>
                    {/*<Grid item lg={5} md={6} sm={6} xs={6} className='center'>*/}
                    {/*    <Fab*/}
                    {/*        variant="extended"*/}
                    {/*        size="medium"*/}
                    {/*        color="secondary"*/}
                    {/*        aria-label="Login"*/}
                    {/*        type="submit"*/}
                    {/*        // disabled={!user.username || !user.password}*/}
                    {/*    >*/}
                    {/*        Save*/}
                    {/*        <ArrowForwardIcon />*/}
                    {/*    </Fab>*/}
                    {/*</Grid>*/}
                </Grid>
            </form>














        </Grid>

    )
}






