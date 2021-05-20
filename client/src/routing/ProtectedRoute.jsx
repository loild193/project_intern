import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from '../contexts/authContext'
import Loading from '../components/common/Loading';
import { Redirect, Route } from 'react-router';

function ProtectedRoute({ component: Component, ...rest }) {
	const {
		authState: { authLoading, isAuthenticated },
	} = useContext(AuthContext);

	if (authLoading) {
		return (
			<Loading />
		)
	}

	return (
		<Route {...rest} render={props => isAuthenticated
			? 
			(
				<>
					<Component {...rest} {...props} />
				</>
			)
			:
			<Redirect to="/login" />}
		/>
	)
}

ProtectedRoute.propTypes = {

}

export default ProtectedRoute

