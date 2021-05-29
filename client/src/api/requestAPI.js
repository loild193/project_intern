import axiosClient from "./axiosClient";

const requestAPI = {
  create: (request) => {
    const url = "/request";

    return axiosClient.post(url, request);
  },
};

export default requestAPI;