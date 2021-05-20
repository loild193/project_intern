import React from 'react'
import PropTypes from 'prop-types'
import LoginForm from '../../auth/Login/LoginForm';
import RegisterForm from '../../auth/RegisterForm';
import Logo from '../../../assets/images/logo.png'

import './Auth.css'

function Auth({ authRoute }) {
	let body;

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

