import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import Home from '../home';
import AllUsers from './AllUsers/AllUsers';

function Admin({ ...rest }) {
	const { url } = useRouteMatch();

	return (
		<Switch>
			<Route 
				exact 
				path={url} 
				{...rest} 
				render={props => <Home {...rest} {...props} />} 
			/>

			<Route 
				path={`${url}/users`} 
				{...rest} 
				render={props => <AllUsers {...rest} {...props} />} 
			/>
		</Switch>
	)
}

Admin.propTypes = {

}

export default Admin

