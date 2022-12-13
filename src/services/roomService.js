import axiosClient from "../axios";

class RoomApi {
  postRoom = (data) => {
    const url = "/room/createRoom";
    return axiosClient.post(url, data);
  };
}
const roomApi = new RoomApi();
export default roomApi;
