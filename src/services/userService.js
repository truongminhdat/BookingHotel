import axiosClient from "../axios";

class UserApi {
  getAll = () => {
    const url = "/auth/getAllUser";
    return axiosClient.get(url);
  };
  createPostUser = (data) => {
    const url = "/user/createUser";
    return axiosClient.post(url, data);
  };
  getlimitHotel = () => {
    const url = "/hotel/getlimithotel?featured=1&limit=4";
    return axiosClient.get(url);
  };
}
const userApi = new UserApi();
export default userApi;
