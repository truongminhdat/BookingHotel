import axiosClient from "../axios";
export const LoginUser = (data) => {
  return axiosClient.post(`/auth/login`, data);
};
export const sendPassword = (data) => {
  return axiosClient.post(`/auth/sendPassword`, data);
};
