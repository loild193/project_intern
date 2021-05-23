import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './CreateRequest.css'
import { Button, FormControl, Grid, Input, InputLabel, MenuItem, Select } from '@material-ui/core'
import { marginStyle } from '../../../customStyles/customStyles';
import { createRequestStyle } from '../../../customStyles/CreateRequestStyles';
import clsx from 'clsx';

function CreateRequest(props) {
	const [request, setRequest] = useState({
		title: "",
		decription: "",
		status: "Open",
		assignee: "",
		category: "",
		priority: "",
	});
	const { title, decription, status, assignee, category, priority } = request;
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

	const handleCreateRequest = e => {
		e.preventDefault();
		console.log(request)
	}

	return (
		<div className="create">
			<div className="create__left">
				<p>Page 1</p>
				<p>Page 2</p>
				<p>Page 3</p>
			</div>

			<form className="create__right" onSubmit={handleCreateRequest}>
				<div className="create__right__header">
					<h4>Create request</h4>
					<Button variant="contained" color="secondary" type="submit">
						Create
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
								<InputLabel htmlFor="decription">Decription</InputLabel>
								<Input
									id="decription"
									name="decription"
									required
									fullWidth
									multiline
									rows={3}
									value={decription}
									onChange={handleChange}
								/>
							</FormControl>
						</Grid>
						
						<Grid item xs={6}>
							<FormControl variant="outlined" className={formControlClassName} disabled>
								<InputLabel htmlFor="status">Status</InputLabel>
								<Select
									label="Status"
									labelId="status"
									value={status}
								>
									<MenuItem value="Open">Open</MenuItem>
									<MenuItem value="Pending">Pending</MenuItem>
									<MenuItem value="Process">Process</MenuItem>
									<MenuItem value="Apporve">Apporve</MenuItem>
									<MenuItem value="Reject">Reject</MenuItem>
								</Select>
							</FormControl>
						</Grid>

						<Grid item xs={6}>
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

						<Grid item xs={6}>
							<FormControl variant="outlined" className={formControlClassName}>
								<InputLabel htmlFor="category">Category</InputLabel>
								<Select
									label="Category"
									labelId="category"
									value={category}
									name="category"
									onChange={handleChange}
								>
									<MenuItem value="Coding">Coding</MenuItem>
									<MenuItem value="Working">Working</MenuItem>
								</Select>
							</FormControl>
						</Grid>

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
									<MenuItem value="High">High</MenuItem>
									<MenuItem value="Medium">Medium</MenuItem>
									<MenuItem value="Low">Low</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</div>
			</form>
		</div>
	)
}

CreateRequest.propTypes = {

}

export default CreateRequest

