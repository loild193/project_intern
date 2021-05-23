import React from 'react';
import clsx from 'clsx';
import {  useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SmsIcon from '@material-ui/icons/Sms';
import StarIcon from '@material-ui/icons/Star';
import {listRequests} from '../../data/SideBar';
import {useStyles} from '../../customStyles/SidebarStyles';
import { marginStyle } from '../../customStyles/customStyles';

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  

  return (
    
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: props.open,
        })}
      >
        <div className={classes.drawerHeader} />
        <List>
            {
              listRequests.map((request,index)=>(
                <React.Fragment>
                    <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="" src=""/>
                    </ListItemAvatar>
                    <ListItemText 
                    
                    primary={
                        <React.Fragment>
                            <div className={classes.primaryTextRequest}>
                              <h5>{request.userName} {request.status} issue</h5>
                              <span style={{position:'absolute',top:'20px',right:'0px'}}>{request.dueDate} months ago</span>
                            </div>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                            <div className={classes.secondaryTextRequest}>
                              <div>
                                <h4>{request.codeRequest} [{request.codeDepartment}] {request.nameRequest}</h4>
                                <span>[Status:Todo]</span>
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
              ))
            }
        </List>
      </main>
    
  );
}
