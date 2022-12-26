import axiosClient from "../axios";
export const LoginUser = (data) => {
  return axiosClient.post(`/auth/login`, data);
};
export const sendPassword = (data) => {
  return axiosClient.post(`/auth/sendPassword`, data);
};
export const authentation = (data) => {
  return axiosClient.get(`/auth/auth`, data);
};
