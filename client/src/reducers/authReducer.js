export const authReducer = (state, action) => {
	const { type, payload: { user, error = null } } = action;

	switch(type) {
		case "SET_AUTH_GSUITE": 
			return {
				...state,
				authChecked: true,
				authLoading: false,
				isAuthenticated: user !== null,
				error,
				user,
			};

		case "SET_AUTH_GSUITE_ERROR": {
			return {
				...state,
				authChecked: true,
				authLoading: false,
				error,
			}
		}

		default:
			return state;
	}
}