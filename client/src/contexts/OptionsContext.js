import { createContext,useReducer,useState } from "react";
import requestAPI from "../api/requestAPI";
import { SET_REQUEST,REQUEST_LOADED_SUCCESS,DETAIL_REQUEST_SUCCESS } from "../lib/constant";
import { requestReducer } from "../reducers/requestReducer";
export const OptionsContext = createContext();

const OptionsContextProvider = ({children})=>{
  const [requestState, dispatch] = useReducer(requestReducer, {
    requestLoading: false,
    request: null,
    requests:[],
    detailRequest:[],
  });
  
  //state 
  const [status,setStatus] = useState(-1);
  // convert number -> status
  const convertStatus = (status)=>{
    switch (status){
    
      case 0: return 'Open';
      case 1: return 'Pending';
      case 2: return 'Process';
      case 3: return "Approve";
      case 4: return "Reject";
      default: return 'All';
    }
  }
  // convert status -> number
  const convertStringToStatus = (status)=>{
    switch (status){
      case 'Open': return 0;
      case 'Pending': return 1;
      case 'Process': return 2;
      case 'Approve': return 3;
      case 'Reject': return 4;
      default: return -1;
    }
  }

  // convert number -> status
  const convertPriority = (priority)=>{
    switch (priority){
      case 0: return 'Low';
      case 1: return 'Medium';
      case 2: return 'High';
      default: return 'All';
    }
  }

  //function handle click options
  const handleClickOptions = (state)=>{
    setStatus(state);
    console.log(status);
  }
  // filter base on option
  const handleFilter = (state,requests)=>{
    var data = [...requests];
    if(state ===-1) return data;
    else {
      var res = data.filter(function(ele){
        return ele.status === state
      })
      return res;
    }
  }

  // create new request
  const createRequest = async newRequest => {
    try {
      dispatch({
        type: SET_REQUEST,
        payload: {
          requestLoading: true,
        }
      });
      const response = await requestAPI.create(newRequest);
      console.log(response)
      dispatch({
        type: SET_REQUEST,
        payload: {
          requestLoading: false,
          request: response[1],
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
  // get all requests 
  const getRequests = async ()=>{
    try {
      const response = await requestAPI.getAll();
      if(response){
        dispatch({
          type: REQUEST_LOADED_SUCCESS,
          payload: {
            requestLoading: false,
            requests: response,
          }
        })
        
      }
    }
    catch(error){
      console.log(error);
    }
  }
  // get detail request base on id request
  const getDetailRequest = async (id)=>{
    try{
      const response = await requestAPI.detailRequest(id);
      console.log(response);
      if(response){
        dispatch({
          type: DETAIL_REQUEST_SUCCESS,
          payload: {
            requestLoading: false,
            detailRequest: response,
          }
        })
      }
      
    }
    catch(error){
      console.log(error);
    }
  }

  //context data 
  const optionsContextData = {
    status,
    convertStatus,
    handleClickOptions,
    convertStringToStatus,
    handleFilter,
    requestState,
    createRequest,
    getRequests,
    getDetailRequest,
    convertPriority,
  }

  return (
    <OptionsContext.Provider value={optionsContextData}>
      {children}
    </OptionsContext.Provider>
  )
}
export default OptionsContextProvider;