import { Button, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import clsx from 'clsx';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/authContext';
import { OptionsContext } from '../../../contexts/OptionsContext';
import { createRequestStyle } from '../../../customStyles/CreateRequestStyles';
import { marginStyle } from '../../../customStyles/customStyles';
import { useStyles } from '../../../customStyles/SidebarStyles';
import Loading from '../../common/Loading';
import MyAlert from '../../common/MyAlert';
import './CreateRequest.css';


function CreateRequest({ open }) {
	const [success, setSuccess] = useState({
		openAlert: false,
		successMessage: "",
	});
	const [request, setRequest] = useState({
		title: "",
		description: "",
		status: 0,
		assignee: "",
		due_date: "",
		category_id: 0,
		priority: 0,
	});
	const { 
		title, 
		description, 
		status, 
		assignee, 
		due_date,
		category_id, 
		priority, 
	} = request;
	const {authState: { user }} = useContext(AuthContext);
	const { requestState: { requestLoading }, createRequest } = useContext(OptionsContext);
	const classes = useStyles();
	const marginStyles = marginStyle();
	const createRequestStyles = createRequestStyle();
	const marginClassName = clsx(marginStyles.marginTop20px);
	const formControlClassName = clsx(createRequestStyles.formControl, marginStyles.marginTop20px);
	const decriptionClassName = clsx(
		marginStyles.marginTop20px, 
		createRequestStyles.decription,
		createRequestStyles.minWidth,
	);

	const handleChange = e => {
		setRequest({
			...request,
			[e.target.name]: e.target.value,
		});
	}

	const onSetCloseAlert = () => {
		setSuccess({
			...success,
			openAlert: false,
		});
	}

	const handleCreateRequest = async e => {
		e.preventDefault();
		const newRequest = {
			...request,
			user_id: user.id,
		};
		console.log(newRequest)
		await createRequest(newRequest);
		setSuccess({
			...success,
			openAlert: true,
			successMessage: "Create new request successfully!",
		});
		setTimeout(() => {
			setSuccess({
				...success,
				openAlert: false,
			});
		}, 2000);
	}

	return (
		<div className={clsx(classes.content, {
			[classes.contentShift]: open,
		})}>
			<form className="create__right" onSubmit={handleCreateRequest}>
				<MyAlert 
					error={false} 
					openAlert={success.openAlert}
					setCloseAlert={onSetCloseAlert}
					errorMessage={success.successMessage}
				/>
				<div className="create__right__header">
					<h4>Create request</h4>
					<Button variant="contained" color="secondary" type="submit">
						Create { requestLoading && <Loading size="1rem" /> }
					</Button>
				</div>
				<div className="create__right__form">
					<FormControl className={marginClassName}>
						<InputLabel htmlFor="title">Title</InputLabel>
						<Input
							id="title"
							name="title"
							autoFocus
							required
							fullWidth
							value={title}
							onChange={handleChange}
						/>
					</FormControl>
					<Grid container>
						<Grid item xs={12}>
							<FormControl className={decriptionClassName}>
								<InputLabel htmlFor="description">Description</InputLabel>
								<Input
									id="description"
									name="description"
									required
									fullWidth
									multiline
									rows={3}
									value={description}
									onChange={handleChange}
								/>
							</FormControl>
						</Grid>
						
						<Grid item xs={4}>
							<FormControl variant="outlined" className={formControlClassName} disabled>
								<InputLabel htmlFor="status">Status</InputLabel>
								<Select
									label="Status"
									labelId="status"
									value={status}
								>
									<MenuItem value={0}>Open</MenuItem>
									<MenuItem value={1}>Pending</MenuItem>
									<MenuItem value={2}>Process</MenuItem>
									<MenuItem value={3}>Apporve</MenuItem>
									<MenuItem value={4}>Reject</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						<Grid item xs={4}>
							<FormControl variant="outlined" className={formControlClassName}>
								<InputLabel htmlFor="assignee">Assignee</InputLabel>
								<Select
									label="Assignee"
									autoWidth
									labelId="assignee"
									value={assignee}
									name="assignee"
									onChange={handleChange}
								>
									<MenuItem value="A">A</MenuItem>
									<MenuItem value="B">B</MenuItem>
									<MenuItem value="C">C</MenuItem>
									<MenuItem value="D">D</MenuItem>
									<MenuItem value="E">E</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						<Grid item xs={4}>
							<FormControl variant="outlined" className={formControlClassName}>
								<TextField
									label="Due date"
									id="date"
									name="due_date"
									type="date"
									value={due_date}
									variant="outlined"
									InputLabelProps={{
										shrink: true,
									}}
									onChange={handleChange}
								/>
							</FormControl>
						</Grid>

						<Grid item xs={6}>
							<FormControl variant="outlined" className={formControlClassName}>
								<InputLabel htmlFor="category">Category</InputLabel>
								<Select
									label="Category"
									labelId="category"
									value={category_id}
									name="category_id"
									onChange={handleChange}
								>
									<MenuItem value={0}>Coding</MenuItem>
									<MenuItem value={1}>Working</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						{
							user.role === 0 && 
							<Grid item xs={6}>
								<FormControl variant="outlined" className={formControlClassName}>
									<InputLabel htmlFor="priority">Priority</InputLabel>
									<Select
										label="Priority"
										labelId="priority"
										name="priority"
										value={priority}
										onChange={handleChange}
									>
										<MenuItem value={2}>High</MenuItem>
										<MenuItem value={1}>Medium</MenuItem>
										<MenuItem value={0}>Low</MenuItem>
									</Select>
								</FormControl>
							</Grid>
						}
					</Grid>
				</div>
			</form>
		</div>
	)
}

CreateRequest.propTypes = {

}

export default CreateRequest

