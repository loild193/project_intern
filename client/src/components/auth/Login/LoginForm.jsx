import React, { useState } from 'react'
import PropTypes from 'prop-types'

import FormControl from '@material-ui/core/FormControl';
import { Button, Checkbox, FormControlLabel, Input, InputLabel } from '@material-ui/core';

import './Login.css'
import { marginStyle } from '../../../customStyles/customStyles';
import clsx from 'clsx'
import { Link } from 'react-router-dom';

function LoginForm(props) {
	const [formValue, setFormValue] = useState({
		email: "",
		password: "",
		isRemember: false,
	});
	const { email, password, isRemember } = formValue;
	const marginStyles = marginStyle();
	const marginClassName = clsx(marginStyles.marginTop20px);

	const onChangeLoginForm = event => {
		setFormValue({
			...formValue,
			[event.target.name]: event.target.value,
		});
	}

	const onChangeCheckbox = () => {
		setFormValue({
			...formValue,
			isRemember: !isRemember,
		});
	}

	const handleLogin = event => {
		event.preventDefault();
		console.log(formValue);
		// handle login here
	}

	return (
		<div className="login">
			<h2 className="login__title">Login</h2>
			<form className="login__form" onSubmit={handleLogin}>
				<FormControl className={marginClassName}>
					<InputLabel htmlFor="email">Email</InputLabel>
					<Input 
						id="email"
						name="email"
						autoFocus
						placeholder="Eg. abc@xyz.com"
						required
						value={email}
						onChange={onChangeLoginForm}
					/>
				</FormControl>
				<FormControl className={marginClassName}>
					<InputLabel htmlFor="password">Password</InputLabel>
					<Input 
						id="password"
						name="password"
						required
						type="password"
						value={password}
						onChange={onChangeLoginForm}
					/>
				</FormControl>
				<FormControlLabel
					className={marginClassName}
					control={
						<Checkbox 
							checked={isRemember} 
							onChange={onChangeCheckbox} 
							name="isRemember"
						/>
					}
					label="Remember me"
				/>

				<Button 
					className={marginClassName}
					variant="contained" 
					color="primary"
					type="submit"
				>
					Login
				</Button>
			</form>
			<p className="login__text">Or register with HBLab G-Suite account</p>
			<Link to="/register">
				<Button 
					className={marginClassName}
					variant="contained" 
					color="primary"
					fullWidth
				>
					Register
				</Button>
			</Link>
		</div>
	)
}

LoginForm.propTypes = {

}

export default LoginForm

