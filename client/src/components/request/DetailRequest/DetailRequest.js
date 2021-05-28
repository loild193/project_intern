import React from 'react';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import './DetailRequest.css';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import clsx from 'clsx';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { useStyles } from '../../../customStyles/SidebarStyles';

function DetailRequest({open}) {
    const classes = useStyles();
    
    return (
        <div className={clsx(classes.content, {
			[classes.contentShift]: open,
		})}>
            <div className="WrapContent">
                <div className="header">
                    <div className="title">
                        <div>
                            <span className="mr10px">Task</span>
                            <h7 className="mr10px">LND-28</h7>
                            <span><AssignmentIcon style={{marginBottom:"-6px"}}/></span>
                        </div>
                        <div>
                            <span className="mr20px">Start Date</span>
                            <span className="mr20px">Due Date</span>
                            <Button disabled="true" color="secondary" className="button">Todo
                            </Button>
                        </div>
                    </div>
                    <div className="NameRequest">
                        <h3>[PM02] Tuyen sinh PM02</h3>
                        <Button >
                            <EditIcon />
                            Edit
                        </Button>
                    </div>
                </div>
                <div className="detail">
                    <div>
                        <ListItem>
                            <ListItemText primary="Category"/>
                            <ListItemText primary="Coding"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Version"/>
                            <ListItemText primary="Coding"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Estimated Hours"/>
                            <ListItemText primary="Coding"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Resolution"/>
                            <ListItemText primary="Coding"/>
                        </ListItem>
                        
                    </div>
                    <div>
                        <ListItem>
                            <ListItemText primary="Category"/>
                            <ListItemText primary="Coding"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Version"/>
                            <ListItemText primary="Coding"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Estimated Hours"/>
                            <ListItemText primary="Coding"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Resolution"/>
                            <ListItemText primary="Coding"/>
                        </ListItem>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default DetailRequest;