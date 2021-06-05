import { SET_AUTH_GSUITE, SET_AUTH_GSUITE_ERROR, SET_AUTH_NORMAL } from "../lib/constant";

export const authReducer = (state, action) => {
	const { 
		type, 
		payload: { isAuthenticated, user, error = null } 
	} = action;

	switch(type) {
		case SET_AUTH_GSUITE: 
			return {
				...state,
				authChecked: true,
				authLoading: false,
				isAuthenticated: user !== null,
				// isAuthenticated: true,
				error,
				user,
			};

		case SET_AUTH_GSUITE_ERROR: {
			return {
				...state,
				authChecked: true,
				authLoading: false,
				error,
			}
		}

		case SET_AUTH_NORMAL: {
			return {
				...state,
				authChecked: true,
				isAuthenticated,
				user,
			}
		}

		default:
			return state;
	}
}