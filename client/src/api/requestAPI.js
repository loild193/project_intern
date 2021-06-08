import axiosClient from "./axiosClient";

const requestAPI = {
  create: (request) => {
    const url = "/request";

    return axiosClient.post(url, request);
  },
  createComment:(comment)=>{
    const url ="/comment/create";
    return axiosClient.post(url,comment);
  },


  edit: (params)=>{
    const url = `request/update/${params.id}`;
    return axiosClient.put(url,params);
  },
  editComment:(params)=>{
    const url = `comment/update/${params.id}`;
    return axiosClient.post(url,params);
  },
  getAll:()=>{
    const url ="/request";
    return axiosClient.get(url);
  },
  detailRequest:(id)=>{
    const url = `request/index/${id}`;
    return axiosClient.get(url);
  },
  getComments:(id)=>{
    const url =`request/comment/${id}`;
    return axiosClient.get(url);
  }
};

export default requestAPI;