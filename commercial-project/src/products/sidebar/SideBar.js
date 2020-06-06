import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import './SideBar.scss'

export const SideBar=(props)=>{

    return(
        <div className='sideBar-main'>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Sport</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="Running"
                        />
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="Casual"
                        />
                        <FormControlLabel
                            control={<Checkbox name="checkedA" />}
                            label="Walking"
                        />
                    </FormGroup>
                </ExpansionPanelDetails>
            </ExpansionPanel>


            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Brand</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='sideBar-wrap'>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Nike"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Adidas"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="New Balance"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Jordan"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Size</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='sideBar-wrap'>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="5.5"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="6"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="6.5"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="7"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="7.5"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="8"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="9"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="10"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Color</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='sideBar-wrap'>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Red"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Blue"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Black"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="White"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Price</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className='sideBar-wrap'>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="0-100"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="100-200"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="200-300"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="300-500"
                    />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="above 500"
                    />
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}




