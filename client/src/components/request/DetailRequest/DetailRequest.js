import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EditIcon from '@material-ui/icons/Edit';
import clsx from 'clsx';
import React, { useContext, useEffect } from 'react';
import { OptionsContext } from "../../../contexts/OptionsContext";
import { useStyles } from '../../../customStyles/SidebarStyles';
import { useHistory } from 'react-router';

function DetailRequest(props) {
    const classes = useStyles();
    const history = useHistory();
    const {convertStatus,status,handleFilter,getDetailRequest,requestState:{
        detailRequest,requestLoading
      }} = useContext(OptionsContext);
    const handleOnClick = (id)=>{
        history.push(`/edit/${id}`);
    }

    useEffect(()=>getDetailRequest(props.match.params.id),[]);
    var resConvert = convertStatus(detailRequest.status);
    return (
        <div className={clsx(classes.content, {
			[classes.contentShift]: props.open,
		})}>
            <div className="WrapContent">
                <div className="header">
                    <div className="title">
                        <div>
                            <span className="mr10px">Task</span>
                            <h6 className="mr10px">LND-{detailRequest.user_id}</h6>
                            <span><AssignmentIcon style={{marginBottom:"-6px"}}/></span>
                        </div>
                        <div>
                            <span className="mr20px">Start Date</span>
                            <span className="mr20px">Due Date</span>
                            <Button disabled={true} color="secondary" className="button">{resConvert}
                            </Button>
                        </div>
                    </div>
                    <div className="NameRequest">
                        <h3>[{detailRequest.user_id}] 
                        {detailRequest.title}
                        </h3>
                        <Button onClick={()=>handleOnClick(detailRequest.id)}>
                            <EditIcon />
                            Edit
                        </Button>
                    </div>
                </div>
                <div className="detail">
                    <div>
                        <ListItem>
                            <ListItemText className="mr20px" primary="Description"/>
                            <ListItemText primary={detailRequest.description}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Status"/>
                            <ListItemText primary={resConvert}/>
                        </ListItem>
                        
                        
                    </div>
                    <div>
                        <ListItem>
                            <ListItemText primary="Priority"/>
                            <ListItemText primary={convertPriority(detailRequest.priority)}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Due Date"/>
                            <ListItemText primary={detailRequest.due_date}/>
                        </ListItem>
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default DetailRequest;