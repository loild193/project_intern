import { Button, Collapse } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import { marginStyle } from '../../customStyles/customStyles';
import Loading from '../common/Loading';
import MyAlert from '../common/MyAlert';

function RegisterForm(props) {
	const [openAlert, setOpenAlert] = useState(false);
	const history = useHistory();
	const { 
		authState: { authChecked, authLoading, error, isAuthenticated }, 
		getAuthState, 
		registerWithRedirect, 
	} = useContext(AuthContext);
	const marginStyles = marginStyle();
	const marginClassName = clsx(marginStyles.marginTop20px);

	let body;

	useEffect(() => {
		getAuthState();
	}, []);

	useEffect(() => {
		if (!authLoading && authChecked && error && error.code === "auth/not-hblab-email") {
			setOpenAlert(true);
		}
	}, [authLoading, error]);


	useEffect(() => {
		isAuthenticated && history.push('/');
	}, [isAuthenticated]);

	const onSetCloseAlert = () => {
		setOpenAlert(false);
	}

	const handleRegister = () => {
		registerWithRedirect();
	}

	if (authLoading) {
		body = (
			<Loading size="3rem" />
		)
	}
	else {
		body = (
			<>
				<Button 
					className={marginClassName} 
					variant="contained" 
					startIcon={<ArrowForwardIcon />}
					fullWidth
					onClick={handleRegister}
				>
					Register with HBLab G-Suite account
				</Button>
				<p className="login__text">Already have an account?</p>
				<Link to="/login">
					<Button 
						variant="contained" 
						color="primary"
						fullWidth
					>
						Login
					</Button>
				</Link>
			</>
		)
	}

	return (
		<div className="register">
			<MyAlert 
				openAlert={openAlert}
				errorMessage={error?.message}
				setCloseAlert={onSetCloseAlert}
			/>
			{ body }
		</div>
	)
}

RegisterForm.propTypes = {

}

export default RegisterForm

