import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../../auth/Login/LoginForm';
import RegisterForm from '../../auth/RegisterForm';
import Logo from '../../../assets/images/logo.png'

import './Auth.css'
import { AuthContext } from '../../../contexts/authContext';
import Loading from '../../common/Loading';
import { Redirect } from 'react-router';

function Auth({ authRoute }) {
	const { 
		authState: { authLoading, isAuthenticated, user },
	} = useContext(AuthContext);
	let body;

	if (authLoading)
		body = (
			<Loading />
		)
	else if (isAuthenticated) {
		if (user?.role === 0) 
			return <Redirect to="/admin" />
		else return <Redirect to="/" />
	}
	else 
		body = (
			<>
				{
					authRoute === "login" 
					? <LoginForm />
					: <RegisterForm />
				}
			</>
		)

	return (
		<div className="auth">
			<div className="auth__logo">
				<img src={Logo} alt="logo" />
			</div>
			{ body }
		</div>
	)
}

Auth.propTypes = {
	authRoute: PropTypes.string,
}
Auth.defaultProps = {
	authRoute: "",
}

export default Auth

