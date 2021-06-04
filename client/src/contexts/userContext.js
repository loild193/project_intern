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
	const { authState: { user }} = useContext(AuthContext);

	const getAllUsers = async () => {
		const response = await userAPI.getUsers();
		let allUsers = 
		response
			.filter(allUser => allUser.id !== user.id)
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
			id: response.id,
			bophan_id: response.bophan_id,
			name: response.name,
			email: response.email,
			phone: response.phone,
			role: response.phone,
			created_at: response.created_at,
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

	const userContextData = {
		userState,
		getAllUsers,
		getUserDetail,
		updateUser,
	};

	return (
<		UserContext.Provider value={userContextData}>
			{ children }
		</UserContext.Provider>
	)
}

export default UserContextProvider;