import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../home';
import AllUsers from './AllUsers/AllUsers';
import EditUser from './EditUser/EditUser';
import UserDetail from './UserDetail/UserDetail';

function Admin({ match: { path, url }, ...rest }) {

	return (
		<Switch>
			<Route 
				exact 
				path={path} 
				render={props => <Home {...rest} {...props} />} 
			/>

			<Route
				exact
				path={`${path}/user`} 
				render={props => <AllUsers {...rest} {...props} />} 
			/>

			<Route
				exact
				path={`${path}/user/:id`} 
				render={props => <UserDetail {...rest} {...props} />} 
			/>

			<Route
				exact
				path={`${path}/user/edit/:id`} 
				render={props => <EditUser {...rest} {...props} />} 
			/>

		</Switch>
	)
}

Admin.propTypes = {

}

export default Admin

