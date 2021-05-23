import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Alert from '@material-ui/lab/Alert';
import { Collapse } from '@material-ui/core';

function MyAlert({ setCloseAlert, openAlert, errorMessage }) {
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
				severity="error"
				onClose={handleClose}
			>
				{errorMessage}
			</Alert>
		</Collapse>
	)
}

MyAlert.propTypes = {
	openAlert: PropTypes.bool,
	errorMessage: PropTypes.string,
	setCloseAlert: PropTypes.func,
}
MyAlert.defaultProps = {
	openAlert: false,
	errorMessage: "",
	setCloseAlert: null
}

export default MyAlert

