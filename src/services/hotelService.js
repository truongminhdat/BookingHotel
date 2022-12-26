import axiosClient from "../axios";
export const getlimitHotel = () => {
  return axiosClient.get(`/hotel/getlimithotel?featured=1&limit=4`);
};
export const getCityHotel = (data) => {
  return axiosClient.get(`/hotel/getcityHotel?city=Đà Nẵng`);
};
