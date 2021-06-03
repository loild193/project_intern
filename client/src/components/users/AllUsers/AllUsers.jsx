import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import userAPI from '../../../api/userAPI';
import { AuthContext } from '../../../contexts/authContext';
import { useStyles } from '../../../customStyles/SidebarStyles';
import { changeBophanToName, changeRoleToName } from '../../../lib/helper';
import Loading from '../../common/Loading';

import './AllUsers.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'phone', headerName: 'Phone', width: 150 },
  { field: 'part', headerName: 'Part', width: 120 },
  { field: 'role', headerName: 'Role', width: 150 },
];

function AllUsers({ open }) {
  const [allUsers, setAllUsers] = useState([]);
  const { authState: { user }} = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    const getAllUsers = async () => {
			const response = await userAPI.getUsers();
			response && 
			setAllUsers(
        response
          .filter(allUser => allUser.id !== user.id)
          .map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            part: changeBophanToName(user.bophan_id),
            role: changeRoleToName(user.role),
          }))
      );
		}

		getAllUsers();
  }, []);
  
  const handleRowSelected = (param) => {
    history.push(`/admin/user/${param.data.id}`);
  }

  const handleGotoCreateUserPage = () => {
    history.replace('/admin/user/create');
  }

	return (
		<div className={clsx(classes.content, {
      [classes.contentShift]: open,
    })}  style={{ marginTop: 55}}>
      <div className={classes.drawerHeader} style={{ height: 590, width: '100%' }}>
        {
          allUsers.length === 0 ?
          <Loading size="3rem" /> :
          <div className="all-user__wrapper">
            <div className="all-user__header">
              <h4>All users</h4>
              <Button variant="contained" color="secondary" onClick={handleGotoCreateUserPage}>
                Create User
              </Button>
            </div>
            <DataGrid 
              rows={allUsers} 
              columns={columns} 
              pageSize={10}
              onRowSelected={handleRowSelected}
            />
          </div>
        }
      </div>
		</div>
	)
}

AllUsers.propTypes = {

}

export default AllUsers

