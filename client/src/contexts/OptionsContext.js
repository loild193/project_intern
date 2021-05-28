import { createContext,useState } from "react";
import {listRequests} from '../data/SideBar';
export const OptionsContext = createContext();

const OptionsContextProvider = ({children})=>{

    //data 
    const ListOptions = ['All','Open','Pending','Process','Approve','Reject'];
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
  //function handle click options
  const handleClickOptions = (state)=>{
    setStatus(state);
    console.log(status);
  }
  // filter base on option
  const handleFilter = (state)=>{
    var data = [...listRequests];
    if(state ===-1) return data;
    else {
      var res = data.filter(function(ele){
        return ele.status === state
      })
      return res;
    }
  }
  //context data 
  const optionsContextData = {
      status,
      convertStatus,
      handleClickOptions,
      convertStringToStatus,
      handleFilter,
  }

  return (
    <OptionsContext.Provider value={optionsContextData}>
      {children}
    </OptionsContext.Provider>
  )
}
export default OptionsContextProvider;