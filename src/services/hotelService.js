import axiosClient from "../axios";
export const getlimitHotel = () => {
  return axiosClient.get(`/hotel/getlimithotel?featured=1&limit=4`);
};
