import { Button, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/authContext'
import { OptionsContext } from '../../../contexts/OptionsContext';
import { createRequestStyle } from '../../../customStyles/CreateRequestStyles';
import { marginStyle } from '../../../customStyles/customStyles';
import { useStyles } from '../../../customStyles/SidebarStyles';
import Loading from '../../common/Loading';
import MyAlert from '../../common/MyAlert';
import './EditRequest.css';

function EditRequest(props) {
	const [success, setSuccess] = useState({
		openAlert: false,
		successMessage: "",
	});
	const [request, setRequest] = useState({
		title: "",
		description: "",
		status: 0,
		category_id: 0,
		priority: 0,
	});
	const [comment,setComment] = useState({
		content:""
	})
	const { 
		title, 
		description, 
		status, 
		category_id, 
		priority, 
	} = request;
	const {getComments, requestState:{
        comments,
      }} = useContext(OptionsContext);
	const {content} = comment;
	const idRequest = props.match.params.id;
	const { requestState: { requestLoading, detailRequest }, editRequest, getDetailRequest,checkUserInComments } = useContext(OptionsContext);
	const {authState: { user }} = useContext(AuthContext);
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

	useEffect(() => {
		getDetailRequest(props.match.params.id);
		getComments(props.match.params.id);
		setRequest(detailRequest);
	}, []);
	console.log(comments);
	const handleChange = e => {
		setRequest({
			...request,
			[e.target.name]: e.target.value,
		});
		setComment({
			...comment,
			[e.target.name]:e.target.value,
		});
	}

	const onSetCloseAlert = () => {
		setSuccess({
			...success,
			openAlert: false,
		});
	}

	const handleEditRequest = async e => {
		e.preventDefault();
		const updateRequest = {
			...request,
			id: idRequest,
		};
		var [status,idComment] = checkUserInComments(user.id,comments,idRequest);
		
		const create_comment = {
			user_id:user.id,
			request_id:idRequest,
			content:comment.content
		}
		await editRequest(updateRequest,comment.content,idComment,create_comment,status);
		
		setSuccess({
			...success,
			openAlert: true,
			successMessage: "Update request successfully!",
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
			[classes.contentShift]: props.open,
		})}>
			<form className="create__right" onSubmit={handleEditRequest} method='PUT'>
				<MyAlert 
					error={false} 
					openAlert={success.openAlert}
					setCloseAlert={onSetCloseAlert}
					errorMessage={success.successMessage}
				/>
				<div className="create__right__header">
					<h4>Update request</h4>
					<Button variant="contained" color="secondary" type="submit">
						Update { requestLoading && <Loading size="1rem" /> }
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
						<Grid item xs={2}></Grid>
						<Grid item xs={5}>
							<FormControl variant="outlined" className={formControlClassName} >
								<InputLabel htmlFor="status">Status</InputLabel>
								<Select
									label="Status"
									labelId="status"
									name="status"
									value={status}
									onChange={handleChange}
								>
									<MenuItem value={0}>Open</MenuItem>
									<MenuItem value={1}>Pending</MenuItem>
									<MenuItem value={2}>Process</MenuItem>
									<MenuItem value={3}>Apporve</MenuItem>
									<MenuItem value={4}>Reject</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						

						<Grid item xs={5}>
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

						<Grid item xs={2}></Grid>
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
					</Grid>
					<Grid item xs={12}>
							<FormControl className={decriptionClassName}>
								<InputLabel htmlFor="description">Comment</InputLabel>
								<Input
									id="comment"
									name="content"
									required
									fullWidth
									multiline
									rows={3}
									value={content}
									onChange={handleChange}
								/>
							</FormControl>
					</Grid>
				</div>
			</form>
		</div>
	)
}

EditRequest.propTypes = {

}

export default EditRequest

