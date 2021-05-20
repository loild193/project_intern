import { Button, Collapse } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Alert from '@material-ui/lab/Alert';
import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import { marginStyle } from '../../customStyles/customStyles';

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

	const handleRegister = () => {
		registerWithRedirect();
	}

	const handleCloseAlert = () => {
		setOpenAlert(false);
	}

	if (authLoading) {
		body = (
			<CircularProgress />
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
			<Collapse in={openAlert}>
				<Alert 
					severity="error"
					onClose={handleCloseAlert}
				>
					{error?.message}
				</Alert>
			</Collapse>
			{ body }
		</div>
	)
}

RegisterForm.propTypes = {

}

export default RegisterForm

