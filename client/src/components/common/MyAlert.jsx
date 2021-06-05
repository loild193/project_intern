import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Alert from '@material-ui/lab/Alert';
import { Collapse } from '@material-ui/core';

function MyAlert({ error, setCloseAlert, openAlert, errorMessage }) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(openAlert);
	}, [openAlert]);

	const handleClose = () => {
		setOpen(false);
		setCloseAlert();
	}

	return (
		<Collapse in={open}>
			<Alert 
				severity={error ? "error" : "success"}
				onClose={handleClose}
			>
				{errorMessage}
			</Alert>
		</Collapse>
	)
}

MyAlert.propTypes = {
	error: PropTypes.bool,
	openAlert: PropTypes.bool,
	errorMessage: PropTypes.string,
	setCloseAlert: PropTypes.func,
}
MyAlert.defaultProps = {
	error: "true",
	openAlert: false,
	errorMessage: "",
	setCloseAlert: null
}

export default MyAlert

