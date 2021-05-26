import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { useTheme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import BarChartIcon from '@material-ui/icons/BarChart';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { marginStyle } from '../../customStyles/customStyles';
import { useStyles } from '../../customStyles/SidebarStyles';
import MyListItem from '../common/MyListItem';


export default function PersistentDrawerLeft(props) {

  
  const [listIcons, setListIcons] = useState([
    {
      name:'Home',
      icon: <HomeIcon/>,
      isChoose: true,
    },
    {
      name:'Add Issue',
      icon:<AddIcon/>,
      isChoose: false,
    },
    {
      name:'Issues',
      icon:<ListAltIcon/>,
      isChoose: false,
    },
    {
      name:'Board',
      icon:<BarChartIcon/>,
      isChoose: false,
    },
    {
      name:'Gantt Chart',
      icon:<EqualizerIcon/>,
      isChoose: false,
    },
    {
      name:'Wiki',
      icon:<EqualizerIcon/>,
      isChoose: false,
    },
    {
      name:'Files',
      icon:<FileCopyIcon/>,
      isChoose: false,
    },
    {
      name:'Project Settings',
      icon:<SettingsIcon/>,
      isChoose: false,
    },
  ]);
  const classes = useStyles();
  const history = useHistory();
  const theme = useTheme();

  const handleChangeURL = name => {
    const itemIndex = listIcons.findIndex(icon => icon.name === name);
    const newListIcons = listIcons.map(item => ({
      ...item,
      isChoose: false,
    }));

    setListIcons([
      ...newListIcons.slice(0, itemIndex),
      {
        ...newListIcons[itemIndex],
        isChoose: true,
      },
      ...newListIcons.slice(itemIndex + 1),
    ]);
    if (name === "Add Issue") {
      history.push('/create');
    }
    else if (name === "Home") {
      history.push('/');
    }
  }
  
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
      <div 
        className={classes.drawerHeader} 
        style={{backgroundColor:'#4caf93'}}
      >
        <IconButton onClick={props.handleDrawerClose} className={classes.styleIcon}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      
      <List className={classes.DrawerList}>
        {
          listIcons.map((item, index)=> 
          <MyListItem 
            index={index}
            styleIcon={classes.styleIcon}
            icon={item.icon}
            name={item.name}
            isChoose={item.isChoose}
            onItemClick={handleChangeURL}
          />)
        }
      </List>     
    </Drawer>
  );
}
