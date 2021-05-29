import { DataGrid } from '@material-ui/data-grid';
import clsx from 'clsx';
import React from 'react';
import { useStyles } from '../../../customStyles/SidebarStyles';

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 200 },
  { field: 'created_at', headerName: 'Created at', width: 200 },
  { field: 'part_id', headerName: 'Part_id', width: 200 },
];

const rows = [
  { id: 1, name: 'Snow', email: 'Jon@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 2, name: 'Lannister', email: 'Cersei@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 3, name: 'Lannister', email: 'Jaime@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 4, name: 'Stark', email: 'Arya@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 5, name: 'Targaryen', email: 'Daenerys@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 6, name: 'Melisandre', email: "null@aa.com", phone: "0123456789", created_at: "2021-05-25" },
  { id: 7, name: 'Clifford', email: 'Ferrara@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 8, name: 'Frances', email: 'Rossini@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 9, name: 'Roxie', email: 'Harvey@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 10, name: 'Snow', email: 'Jon@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 12, name: 'Lannister', email: 'Cersei@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 13, name: 'Lannister', email: 'Jaime@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 14, name: 'Stark', email: 'Arya@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 15, name: 'Targaryen', email: 'Daenerys@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 16, name: 'Melisandre', email: "null@aa.com", phone: "0123456789", created_at: "2021-05-25" },
  { id: 17, name: 'Clifford', email: 'Ferrara@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 18, name: 'Frances', email: 'Rossini@aa.com', phone: "0123456789", created_at: "2021-05-25" },
  { id: 19, name: 'Roxie', email: 'Harvey@aa.com', phone: "0123456789", created_at: "2021-05-25" },
];

function AllUsers({ open }) {
  const classes = useStyles();
  
	return (
		<div className={clsx(classes.content, {
      [classes.contentShift]: open,
    })}  style={{ marginTop: 55}}>
      <div className={classes.drawerHeader} style={{ height: 590, width: '100%' }}>
			  <DataGrid rows={rows} columns={columns} pageSize={10} />
      </div>
		</div>
	)
}

AllUsers.propTypes = {

}

export default AllUsers

