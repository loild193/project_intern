import React from 'react';
import TextField from '@material-ui/core/TextField';
import {editRequest} from "../../customStyles/EditRequest";
import { useStyles } from '../../customStyles/SidebarStyles'
import Divider from '@material-ui/core/Divider';
import './StyleEditRequest.css';
import axios from 'axios';
import clsx from 'clsx';
function EditRequest(props) {
    const classes = editRequest();
    const sidebarClasses = useStyles();
    const handleSubmit = ()=>{
        axios({
            method:'post',
            url:'http://localhost:3000/edit',
            params:{
                name:'khang',
                pass:'000'
            }
        }
       )
        .then((res) => {
          alert(res.data.message);
          
        })
        .catch((err) => {
          
          console.log(err);
          alert(err)
        })
    }
    
    return (
        <div className={clsx(sidebarClasses.content, {
            [sidebarClasses.contentShift]: props.open,
          })}>
            <form style={{marginTop:'60px'}}>
                <div className={classes.styleDisplay}>
                    <div className="mtb10">
                        <label className={classes.styleLabel}>Status</label>
                        <select name="status" id='' >
                            <option value="todo">Todo</option>
                            <option value="open">Open</option>
                            <option value="resolved">Resolved</option>
                            <option value="in progress">In Progress</option>
                            <option value="closed">Closed</option>
                        </select>
                    </div>
                    <Divider/>
                        <div className="mtb10">
                            <label className={classes.styleLabel}>Priovity</label>
                            <select name="priovity" id='' >
                                <option value="normal">normal</option>
                                <option value="important">Important</option>
                                
                            </select>
                        </div>
                        <Divider/>
                        <div className="mtb10">
                            <label className={classes.styleLabel}>Category</label>
                            <select name="category" id='' >
                            <option value="marketing">Marketing</option>
                            <option value="coding">Coding</option>
                            </select>
                        </div>
                        <Divider/>
                        <div className="mtb10">
                            <label className={classes.styleLabel}>Start Date</label>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue="2021-05-23"
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </div>
                        <Divider/>
                        <div className="mtb10">
                            <label className={classes.styleLabel}>Estimated Hours</label>
                            <input id="hours" type="text"></input>
                            <span  style={{marginLeft:'2px'}}>hours</span>
                        </div>                       
                    </div>                                    
                <div className={classes.styleDisplay}>
                    <div className="mtb10">
                        <label className={classes.styleLabel}>Assignee</label>
                        <select name="assignee" id='' >
                        <option value="myself">myself</option>
                        </select>
                    </div>
                    <Divider/>
                    <div className="mtb10">
                        <label className={classes.styleLabel}>Milestone</label>
                        <select name="milestone" id='' >
                            <option value="normal">normal</option>
                            <option value="important">Important</option>
                            
                        </select>
                    </div>
                    <Divider/>
                    <div className="mtb10">
                        <label className={classes.styleLabel}>Version</label>
                        <select name="version" id='' >
                        <option value="marketing">Marketing</option>
                        <option value="coding">Coding</option>
                        </select>
                    </div>
                    <Divider/>
                    <div className="mtb10">
                        <label className={classes.styleLabel}>Due Date</label>
                        <TextField
                            id="date"
                            type="date"
                            defaultValue="2021-05-23"
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </div>
                    <Divider/>
                    <div className="mtb10">
                        <label 
                           className={classes.styleLabel}
                        >
                            Actual <span>Hours</span></label>
                        <input id="hours" type="text"></input>
                        <span style={{marginLeft:'2px'}}>hours</span>
                    </div>
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default EditRequest;