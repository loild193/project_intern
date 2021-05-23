import React from 'react';
import clsx from 'clsx';
import {  useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RssFeedOutlinedIcon from '@material-ui/icons/RssFeedOutlined';
import TuneIcon from '@material-ui/icons/Tune';
import Button from '@material-ui/core/Button';
import {useStyles} from '../../customStyles/SidebarStyles';
import { marginStyle } from '../../customStyles/customStyles';

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const marginStyles = marginStyle();
  const theme = useTheme();
  

  return (
   
      <React.Fragment>
          <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, props.open&&classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.AppBarHeader}>
            <div style={{display:'flex'}}>
                <Typography variant="h6" noWrap>
                    Project home:
                </Typography>
              
                  <div className={marginStyles.marginTop8px}>Recent Update</div>
                  <span className={marginStyles.marginTop5px}><RssFeedOutlinedIcon style={{color:'#d8d8d8'}}/></span>
                
            </div>
            <div style={{display:'flex'}}>
                <p>Show:All</p>
                <Button onClick={props.handleChooseOption} className={classes.ButtonStyles}>
                    <TuneIcon/>
                    <span>View Options</span>
                </Button>
                {props.option&&(
                    <List className={classes.ListOptions}>
                    <ListItem button>
                        <ListItemText primary="All"/>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemText primary="Updated"/>
                    </ListItem>
                    <Divider/>
                    <ListItem button>
                        <ListItemText primary="Added"/>
                    </ListItem>
                </List>
                )}
            </div>
          </div>
        </Toolbar>
      </AppBar> 
      </React.Fragment>
  );
}
