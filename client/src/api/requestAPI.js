import axiosClient from "./axiosClient";

const requestAPI = {
  create: (request) => {
    const url = "/request";

    return axiosClient.post(url, request);
  },
  getAll:()=>{
    const url ="/request";
    return axiosClient.get(url);
  },
  detailRequest:(id)=>{
    const url = `request/index/${id}`;
    return axiosClient.get(url);
  }
};

export default requestAPI;