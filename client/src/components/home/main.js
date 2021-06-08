import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import SmsIcon from '@material-ui/icons/Sms';
import StarIcon from '@material-ui/icons/Star';
import clsx from 'clsx';
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import { OptionsContext } from "../../contexts/OptionsContext";
import { UserContext } from "../../contexts/userContext";
import { useStyles } from '../../customStyles/SidebarStyles';
export default function PersistentDrawerLeft(props) {
  const {convertStatus,status,handleFilter,handleConvertIdToName,getRequests,requestState:{
    requests,
  }} = useContext(OptionsContext);
  const { userState: { allUsers }, getAllUsersWithAdmin } = useContext(UserContext);
  const classes = useStyles();
  
  const history = useHistory();
  
  const handleClick = (id)=>{
    history.push(`/detail/${id}`);
  }
  useEffect(()=>{
    getRequests();
    getAllUsersWithAdmin();
  },[]);
  
  const data = handleFilter(status,requests);
  
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: props.open,
      })}
    >
      <div className={classes.drawerHeader} />
      <List>
        {
          data.map((request,index)=>
           {
             var resConvert = convertStatus(request.status);
             var user = handleConvertIdToName(request.user_id,allUsers);
             if(user.length==0){
               user.push({name:''})
             }
             
             return (
              <React.Fragment>
              <ListItem className={classes.listItemRequest}>
                <ListItemAvatar >
                    <Avatar alt="" src=""/>
                </ListItemAvatar>
                <ListItemText onClick={()=>handleClick(request.id)}
                
                primary={
                  <React.Fragment>
                    <div className={classes.primaryTextRequest}>
                      <h5>{user[0].name} created issue</h5>
                      <span style={{position:'absolute',top:'20px',right:'0px'}}>{request.due_date} months ago</span>
                    </div>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <div className={classes.secondaryTextRequest}>
                      <div>
                        <h4 >LND-{request.user_id} [{request.user_id}] {request.description}</h4>
                        <span>[Status:{resConvert}]</span>
                      </div>
                      <div className={classes.iconRequest}>
                          <SmsIcon/>
                          <StarIcon/>
                      </div>
                    </div>
                  </React.Fragment>
                }
                />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
             )
           }
            
        )
        }
      </List>
    </main>
  );
}
