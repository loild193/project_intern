import { SET_REQUEST,REQUEST_LOADED_SUCCESS,REQUEST_LOADED_FAIL } 
from "../lib/constant";

export const requestReducer = (state, action) => {
	const { 
		type, 
		payload: { requestLoading, request,requests } 
	} = action;

	switch(type) {
		case SET_REQUEST: 
			return {
				...state,
				requestLoading,
				request,
			}
		case REQUEST_LOADED_SUCCESS:
			return {
				...state,
				requestLoading,
				requests,
			}
		case REQUEST_LOADED_FAIL:
			return{
				...state,
				requests:[],
				requestLoading,
			}	

		default:
			return state;
	}
}