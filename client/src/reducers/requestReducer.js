import { SET_REQUEST } from "../lib/constant";

export const requestReducer = (state, action) => {
	const { 
		type, 
		payload: { requestLoading, request } 
	} = action;

	switch(type) {
		case SET_REQUEST: 
			return {
				...state,
				requestLoading,
				request,
			}

		default:
			return state;
	}
}