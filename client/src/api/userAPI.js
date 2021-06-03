import axiosClient from "./axiosClient";

const userAPI = {
  login: (userInfo) => {
    const url = "/user-login";

    return axiosClient.post(url, userInfo);
  },
  register: userInfo => {
    const url = "/user-signup";

    return axiosClient.post(url, userInfo);
  },
  checkUser: (email) => {
    const url = `user/${email}`;

    return axiosClient.get(url);
  },
  getUsers: () => {
    const url = 'user';

    return axiosClient.get(url);
  },
};

export default userAPI;