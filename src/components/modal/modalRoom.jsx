import React, { useEffect, useState } from "react";
import roomApi from "../../services/roomService";
import roomTypeApi from "../../services/roomTypeService";

const ModalRoom = ({ setShowModal }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [convenient, setConvenient] = useState("");
  const [roomTypeId, setRoomTypeId] = useState("");
  const [roomType, setRoomType] = useState([]);

  useEffect(() => {
    const fetchRole = async () => {
      const { data } = await roomTypeApi.getAllRoomType();

      setRoomType(data.getAllRoomType);
    };
    fetchRole();
  }, []);
  const handleOnChangeAvatar = (e) => {
    const file = e.target.file[0];
    file.preview = URL.createObjectURL(file);
    console.log("check anh", file.preview);
    setImage(file);
  };

  const handleSubmit = async () => {
    let data = { name, title, convenient, price, image, roomTypeId };
    let res = await roomApi.postRoom(data);
    if (res) {
      alert("Thêm thành công");
    } else {
      alert("Thêm thất bại");
    }
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add User</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                  <p className="flex items-center mb-6 text-3xl font-extrabold text-gray-900 dark:text-white">
                    <span className="text-black-200">Add Room</span>
                  </p>
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="lg:p-7 space-y-4 md:space-y-5 sm:p-4">
                      <form className=" space-y-4 md:space-y-2" action="#">
                        <div>
                          <label
                            htmlFor="roomName"
                            className="block lg:mb-3 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Room Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            onChange={(event) => {
                              setName(event.target.value);
                            }}
                            id="roomName"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white "
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            onChange={(event) => {
                              setTitle(event.target.value);
                            }}
                            value={title}
                            id="roomTitle"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="convenient"
                            className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Room Convenient
                          </label>
                          <textarea
                            type="text"
                            name="convenient"
                            onChange={(event) => {
                              setConvenient(event.target.value);
                            }}
                            id="roomConvenient"
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Select room type
                          </label>
                          <select
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option>Choose a roomType</option>
                            
                            { roomType && roomType.length > 0 && roomType.map((item, index) => (
                              <option
                                name="roomTypeId"
                                key={index}
                                defaultValue={item.id}
                                onChange={(event) => {
                                  setRoomTypeId(event.target.value);
                                }}
                              >
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="currency-field"
                            className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                            name="price"
                            onChange={(event) => {
                              setConvenient(event.target.value);
                            }}
                          >
                            Price
                          </label>
                          <input
                            type="text"
                            name="price"
                            onChange={(event) => {
                              setPrice(event.target.value);
                            }}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="roomImg"
                            className="block mb-2 md:mb-1 text-sm font-medium text-defaultValuegray-900 dark:text-white"
                          >
                            Image
                          </label>
                          <input
                            type="file"
                            name="image"
                            onChange={handleOnChangeAvatar}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mb-3 lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                          {image && (
                            <img src={image.preview} alt="" width="80%" />
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleSubmit()}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default ModalRoom;
