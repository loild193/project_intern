import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import userAPI from '../../../api/userAPI';
import { UserContext } from '../../../contexts/userContext';
import { useStyles } from '../../../customStyles/SidebarStyles';
import Loading from '../../common/Loading';
import MyAlert from '../../common/MyAlert';
import './AllUsers.css';

function AllUsers({ open }) {
  const [success, setSuccess] = useState({
		openAlert: false,
		successMessage: "",
	});
  const { userState: { allUsers }, getAllUsers, deleteUser } = useContext(UserContext);
  const history = useHistory();
  const classes = useStyles();

  const columns = [
    { field: 'id', headerName: 'ID', width: 110 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Phone', width: 150 },
    { field: 'part', headerName: 'Part', width: 120 },
    { field: 'role', headerName: 'Role', width: 140 },
    { 
      field: 'action', 
      headerName: 'Action', 
      width: 170,
      renderCell: params => {
        return (
          <>
            <Button 
              variant="contained" 
              color="primary" 
              size="small" 
              onClick={() => handleGotoDetailPage(params.row.id)}
            >
              Detail
            </Button>
            <Button 
              variant="contained" 
              color="secondary" 
              size="small" 
              style={{ marginLeft: 16 }}
              onClick={() => handleDeleteUser(params.row.id)}
            >
              Delete
            </Button>
          </>
        )
      }
    },
  ];

  useEffect(() => {
		getAllUsers();
  }, []);

  const onSetCloseAlert = () => {
		setSuccess({
			...success,
			openAlert: false,
		});
	}

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
    
    setSuccess({
			...success,
			openAlert: true,
			successMessage: "Delete user successfully",
		});
		setTimeout(() => {
			setSuccess({
				...success,
				openAlert: false,
			});
		}, 2000);
  }
  
  const handleGotoDetailPage = (id) => {
    history.push(`/admin/user/${id}`);
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
          allUsers?.length === 0 ?
          <Loading size="3rem" /> :
          <div className="all-user__wrapper">
            <MyAlert 
              error={false} 
              openAlert={success.openAlert}
              setCloseAlert={onSetCloseAlert}
              errorMessage={success.successMessage}
            />
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

