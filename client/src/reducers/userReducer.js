import { SET_ALL_USERS, SET_USER_DETAIL,GET_USER_DETAIL, SET_ALL_USERS_WITH_ADMIN } from "../lib/constant";

export const userReducer = (state, action) => {
	const { 
		type, 
		payload,
	} = action;

	switch(type) {
		case SET_ALL_USERS: 
			return {
				...state,
				allUsers: payload.allUsers,
			};
		case SET_ALL_USERS_WITH_ADMIN: 
			return {
				...state,
				allUsers: payload.allUsers,
			};

		case SET_USER_DETAIL:
			return {
				...state,
				user: payload.user,
			};
		case GET_USER_DETAIL:
			return {
				...state,
				user:payload.user,
			}
		default: 
			return state;
	}
}