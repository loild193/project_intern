import React, { Component } from 'react';
import AppBar from './AppBar';
import SideBar from './sidebar';
import Main from './main';
import {useStyles} from '../../customStyles/SidebarStyles';
import {  useTheme } from '@material-ui/core/styles';
export default function Home(props){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  const [option,setOption] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleChooseOption = ()=>{
      setOption(!option);
  }
   return(
       <div className={classes.root}>
            <AppBar 
                handleDrawerOpen={handleDrawerOpen} 
                handleChooseOption={handleChooseOption}
                open={open}
                option={option}
            />
            <SideBar handleDrawerClose={handleDrawerClose} open={open}/>
            <Main open={open}/>
       </div>
   );
}
