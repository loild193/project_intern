import {makeStyles} from '@material-ui/core';
export const useStyles = makeStyles((theme)=>({
    wrapFrom:{
        position:'absolute',
        width:'80%',
        left:'10%',
        right:'10%',
        border:'1px solid #c2c2c2',
        backgroundColor:'white',
        textTransform:'capitalize'
    },
    styleDisplay:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between', 
       
    },
    styleLabel:{
        marginRight:'20px',
        width:'120px',
        display:'inline-block'
    }
}))