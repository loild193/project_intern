import {makeStyles} from '@material-ui/core';
const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:'#F0F0F0',
    color:'black',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  AppBarHeader:{
    display:'flex',
    justifyContent:'space-between',
    width:'100%',
    position:'relative'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  DrawerList:{
    backgroundColor:'#4caf93',
    height:'100%',
    color:'white'
  },
  styleIcon:{
      color:'white',
  },
  ListOptions:{
    position:'absolute',
    top:57,
    right:0,
    backgroundColor:'#4caf93',
    color:'white',
    width:'10%'
  },
  ButtonStyles:{
    border:'1px solid #efefef',
    borderRadius:'25px',
    backgroundColor:'white'
  },
  primaryTextRequest:{
    display:'flex',
    justifyContent:'space-between',
    position:'relative',
  },
  secondaryTextRequest:{
    display:'flex',
    justifyContent:'space-between',
  },
  iconRequest:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  listIsChoose: {
    backgroundColor: "#fff",
    color: "#4caf93",

    '&:hover': {
      backgroundColor: "rgba(255, 255, 255, 0.6)",
    }
  },
  listItemIconIsChoose: {
    color: "#4caf93",
  },
  logoutSpan: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    marginLeft: "10px",
  },
}));