import { SET_REQUEST,REQUEST_LOADED_SUCCESS,REQUEST_LOADED_FAIL,DETAIL_REQUEST_SUCCESS,DETAIL_REQUEST_FAIL,EDIT_REQUEST,GET_COMMENTS } 
from "../lib/constant";

export const requestReducer = (state, action) => {
	const { 
		type, 
		payload: { requestLoading, request,requests,detailRequest,comments,comment } 
	} = action;

	switch(type) {
		case SET_REQUEST: 
			return {
				...state,
				requestLoading,
				request,
				comment,
			}
		case EDIT_REQUEST:
			return{
				...state,
				requestLoading,
				request,
				comment,
			}
		case GET_COMMENTS:
			return {
				...state,
				comments
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
		case DETAIL_REQUEST_SUCCESS:
			return {
				...state,
				detailRequest,
				requestLoading,
			}
		case DETAIL_REQUEST_FAIL:
			return {
				...state,
				detailRequest:[],
				requestLoading,
			}	
		default:
			return state;
	}
}