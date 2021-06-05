import { createContext, useContext, useReducer } from "react";
import userAPI from "../api/userAPI";
import { SET_ALL_USERS, SET_USER_DETAIL } from "../lib/constant";
import { changeBophanToName, changeRoleToName } from "../lib/helper";
import { userReducer } from "../reducers/userReducer";
import { AuthContext } from "./authContext";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
	const [userState, dispatch] = useReducer(userReducer, {
		user: null,
		allUsers: [],
	});

	const getAllUsers = async () => {
		const response = await userAPI.getUsers();
		let allUsers = 
		response
			.map(user => ({
				id: user.id,
				name: user.name,
				email: user.email,
				phone: user.phone,
				part: changeBophanToName(user.bophan_id),
				role: changeRoleToName(user.role),
			}));
			
		dispatch({
			type: SET_ALL_USERS,
			payload: {
				allUsers,
			},
		});
	}

	const getUserDetail = async (id) => {
		const response = await userAPI.getUserWithId(id);
		const userDetail = {
			id: response[0].id,
			bophan_id: response[0].bophan_id,
			name: response[0].name,
			email: response[0].email,
			phone: response[0].phone,
			role: response[0].phone,
			created_at: response[0].created_at,
		}
		dispatch({
			type: SET_USER_DETAIL,
			payload: {
				user: userDetail,
			},
		});
	}
	
	const updateUser = async (userDetail) => {
		await userAPI.updateUser(userDetail);
		dispatch({
			type: SET_USER_DETAIL,
			payload: {
				user: userDetail,
			},
		});
	}

	const deleteUser = async id => {
		await userAPI.deleteUser(id);
		const newAllUsers = userState.allUsers.filter(allUser => allUser.id !== id);
		dispatch({
			type: SET_ALL_USERS,
			payload: {
				allUsers: newAllUsers,
			}
		})
	}

	const userContextData = {
		userState,
		getAllUsers,
		getUserDetail,
		updateUser,
		deleteUser,
	};

	return (
<		UserContext.Provider value={userContextData}>
			{ children }
		</UserContext.Provider>
	)
}

export default UserContextProvider;