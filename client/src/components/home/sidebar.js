import React from 'react';
import {  useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {list} from '../../data/SideBar';
import {useStyles} from '../../customStyles/SidebarStyles';
import { marginStyle } from '../../customStyles/customStyles';

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const marginStyles = marginStyle();
  const theme = useTheme();
  
  return (
    
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader} 
        style={{backgroundColor:'#4caf93'}}
        >
          <IconButton onClick={props.handleDrawerClose} className={classes.styleIcon}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
       
        <List className={classes.DrawerList}>
            {
              list.map((item, index)=>(
                <ListItem button key={index}>
                  <ListItemIcon className={classes.styleIcon}>
                      {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name}/>
                </ListItem>
              ))
            }
        </List>     
      </Drawer>
    
  );
}
