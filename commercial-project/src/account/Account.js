
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {appConstant as appConstants, appConstant} from "../appConstants/appConstants";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Link, Redirect, Route, Switch} from "react-router-dom";
import {AccountSetting} from "./accountSetting/AccountSetting";
import {OrderHistory} from "./orderHistory/OrderHistory";
import './Account.scss'
import SettingsIcon from '@material-ui/icons/Settings';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {getUserInfo} from "../actions/userInfo.action";


export const Account=(props)=>{





    return (
        <Grid container className='main'>
           <Grid item container lg={2} md={3} sm={3} xs={false} className='sideBar'>
               <List
                   component="nav"
                   aria-labelledby="nested-list-subheader"
                   subheader={
                       <ListSubheader component="div" id="nested-list-subheader" className='title'>
                           Setting
                       </ListSubheader>
                   }
                   className='full-width'
               >
                   <ListItem button component={Link} to={appConstant.accountSettingRoute} >
                       <ListItemIcon>
                           <SettingsIcon />
                       </ListItemIcon>
                       <ListItemText primary="Profile" />
                   </ListItem>
                   <ListItem button component={Link} to={appConstant.accountOrderRoute}>
                       <ListItemIcon>
                           <ViewStreamIcon />
                       </ListItemIcon>
                       <ListItemText primary="Orders" />
                   </ListItem>
               </List>
           </Grid>
            <Grid item lg={7} md={6} sm={7} xs={12} className='infoBlock'>
                <Switch>
                    <Route path={appConstants.accountSettingRoute} component={AccountSetting}/>
                    <Route path={appConstants.accountOrderRoute} component={OrderHistory}/>
                    <Route path="*">
                        <Redirect to={appConstants.accountSettingRoute}/>
                    </Route>
                </Switch>
            </Grid>
        </Grid>
    )
}