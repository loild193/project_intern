import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../contexts/authContext'
import Loading from '../components/common/Loading';
import { Redirect, Route } from 'react-router';
import AppBar from '../components/home/AppBar'
import SideBar from '../components/home/sidebar'
import { useStyles } from '../customStyles/SidebarStyles';

function ProtectedRoute({ component: Component, ...rest }) {
	const [open, setOpen] = React.useState(true);
  const [option,setOption] = React.useState(false);
	const classes = useStyles();

	const {
		authState: { authLoading, isAuthenticated },
		logout,
	} = useContext(AuthContext);

	if (authLoading) {
		return (
			<Loading />
		)
	}

	const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleChooseOption = ()=>{
    setOption(!option);
  }

	const handleLogout = () => {
		logout();
	}

	return (
		<Route {...rest} render={props => isAuthenticated
			? 
			(
				<div className={classes.root}>
					<AppBar 
						handleDrawerOpen={handleDrawerOpen} 
						handleChooseOption={handleChooseOption}
						open={open}
						option={option}
						onLogout={handleLogout}
					/>
					<SideBar
						handleDrawerClose={handleDrawerClose} 
						open={open}
					/>
					<Component {...rest} {...props} open={open} />
				</div>
			)
			:
			<Redirect to="/login" />}
		/>
	)
}

ProtectedRoute.propTypes = {

}

export default ProtectedRoute

