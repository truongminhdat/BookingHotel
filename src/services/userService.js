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
}
const userApi = new UserApi();
export default userApi;
