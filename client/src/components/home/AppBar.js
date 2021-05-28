import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import RssFeedOutlinedIcon from '@material-ui/icons/RssFeedOutlined';
import TuneIcon from '@material-ui/icons/Tune';
import clsx from 'clsx';
import React from 'react';
import { marginStyle } from '../../customStyles/customStyles';
import { useStyles } from '../../customStyles/SidebarStyles';

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const marginStyles = marginStyle();
  const theme = useTheme();

  const handleLogout = () => {
    props.onLogout && props.onLogout();
  }
  
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
            <div style={{display:'flex', alignItems: "center"}}>
              <Typography variant="h6" noWrap>
                  Project home:
              </Typography>
                <div className={marginStyles.marginTop5px}>Recent Update</div>
                <span className={marginStyles.marginTop5px}><RssFeedOutlinedIcon style={{color:'#d8d8d8'}}/></span>        
            </div>
            <div style={{display:'flex', alignItems: "center"}}>
              <p>Show:All</p>
              <Button onClick={props.handleChooseOption} className={classes.ButtonStyles}>
                <TuneIcon/>
                <span>View Options</span>
              </Button>
              {props.option && (
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
              <span className={classes.logoutSpan} onClick={handleLogout}>
                Log out
                <ExitToAppIcon />
              </span>
            </div>
          </div>
        </Toolbar>
      </AppBar> 
    </React.Fragment>
  );
}
