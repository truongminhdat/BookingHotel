import axiosClient from "../axios";

class UserApi {
  getAll = () => {
    const url = "/auth/getAllUser";
    return axiosClient.get(url);
  };
}
const userApi = new UserApi();
export default userApi;
