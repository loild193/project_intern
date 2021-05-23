import React from 'react';
import TextField from '@material-ui/core/TextField';
import {useStyles} from "../../customStyles/EditRequest";
import Divider from '@material-ui/core/Divider';
import './StyleEditRequest.css';
function EditRequest(props) {
    const classes = useStyles();
    return (
        <div className={classes.wrapFrom}>
            <form style={{margin:'10px'}}>
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
            </form>
        </div>
    );
}

export default EditRequest;