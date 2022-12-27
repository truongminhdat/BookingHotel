import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as React from "react";
import Button from "@mui/material/Button";
import userApi from "../../services/userService";
import axios from "../../axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import "./modalUser.css";

const ModalUser = ({ setShowModal, title }) => {
  const [users, setUsers] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phonenumber: "",
    dayofbirth: "",
    gender: "",
    role: "",
    avatar:"",
  });
  const [file, setFiles] = useState("");
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setUsers((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  console.log(users);

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      await axios.post(
        "http://localhost:8001/user/createuser",
        users,
        formData
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFiles(image);
    setPreview(URL.createObjectURL(image));
  };
  const saveUser = () => {};

  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none bg-gray-800">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold text-white ">Add User</h3>
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
            <div className="col col-half contact-form">
              <form action="">
                <div className="row mt-8">
                  <div className="col col-half">
                    <input
                    onChange={handleChange}
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="form-control"
                    />
                  </div>
                  <div className="col col-half">
                    <input
                    onChange={handleChange}
                      type="text"
                      name="firstname"
                      placeholder="FirstName"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-8">
                  <div className="col col-half">
                    <input
                    onChange={handleChange}
                      type="text"
                      name="lastname"
                      placeholder="LastName"
                      className="form-control"
                    />
                  </div>
                  <div className="col col-half">
                    <input
                    onChange={handleChange}
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row mt-8">
                  <div className="col col-full">
                    <input
                    onChange={handleChange}
                      type="text"
                      name="address"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-8">
                  <div className="col col-full">
                    <input
                    onChange={handleChange}
                      type="text"
                      name="phonenumber"
                      placeholder="PhoneNumber"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-8">
                  <div className="col col-half">
                    <select
                      name="gender"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Gender"
                    >
                      <option hidden>Giới tính</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col col-half">
                    <select
                      name="role"
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Choose Role"
                    >
                      <option hidden>Role</option>
                      <option>Admin</option>
                      <option>User</option>
                      <option>Staff</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-8">
                  <div className="col col-full">
                    <input type="date" name="dayofbirth" className="form-control" />
                  </div>
                </div>
                <div className="row mt-8">
                  <div className="col col-full">
                    <input
                      type="file"
                      id="preViewImg"
                      hidden
                      name="avatar"
                      className="file-input"
                      onChange={loadImage}
                    />
                    <label className="label-upload" htmlFor="preViewImg">
                      Tải ảnh
                      <i className="fas fa-upload" />
                    </label>
                  </div>
                </div>
              </form>
            </div>

            {/* <div className="relative p-6 flex-auto bg-gray-800">
              <section className="bg-gray-50 dark:bg-gray-800">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0 ">
                  <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="lg:p-7 space-y-4 md:space-y-5 sm:p-4">
                      <form className=" space-y-4 md:space-y-2" action="#">
                        <div>
                          <label
                            htmlFor="username"
                            className="block lg:mb-3 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            User Name
                          </label>
                          <input
                            name="username"
                            type="text"
                            onChange={handleChange}
                            id="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white "
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>

                        <div>
                          <label className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstname"
                            onChange={handleChange}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="currency-field"
                            className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>
                        <div>
                          <label className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            Address
                          </label>
                          <input
                            type="text"
                            name="address"
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>
                        <div>
                          <label className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phonenumber"
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>
                        <div>
                          <label className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white">
                            Date of birth
                          </label>
                          <input
                            type="date"
                            name="dayofbirth"
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Gender
                          </label>
                          <select
                            name="gender"
                            onChange={handleChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option hidden></option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="countries"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Role
                          </label>
                          <select
                            name="role"
                            onChange={handleChange}
                            placeholder="Choose a roomType"
                            id="countries"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option hidden></option>
                            <option>Admin</option>
                            <option>Staff</option>
                            <option>User</option>
                          </select>
                        </div>
                        <div>
                          <label className="block mb-2 md:mb-1 text-sm font-medium text-default Value-gray-900 dark:text-white">
                            Avatar
                          </label>
                          <input
                            type="file"
                            onChange={loadImage}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mb-3 lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                          />
                        </div>
                        {preview ? (
                          <figure className="image">
                            <img src={preview} alt="Image product" />
                          </figure>
                        ) : (
                          ""
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div> */}
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:text-white"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 rounded-md hover:bg-emerald-900 "
                type="button"
                onClick={handleClick}
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

  //   <>
  //     <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
  //       <div className="relative w-auto my-6 mx-auto max-w-3xl">
  //         {/*content*/}
  //         <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
  //           {/*header*/}
  //           <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
  //             <h3 className="text-3xl font-semibold">{title}</h3>
  //             <button
  //               className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
  //               onClick={() => setShowModal(false)}
  //             >
  //               <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
  //                 ×
  //               </span>
  //             </button>
  //           </div>

  //           <div className="relative p-4 flex-auto">
  //             <form
  //               className="mb-4 md:flex md:flex-wrap md:justify-between"
  //               // onSubmit={handleSubmit(onSubmit)}
  //             >
  //               <div className="flex flex-col mb-4 md:w-full">
  //                 <TextField
  //                   onChange={handleChange}
  //                   sx={{ padding: "10px" }}
  //                   label="User Name"
  //                   name="username"
  //                   placeholder="Username"
  //                   // {...register("username", { required: true })}
  //                   // error={errors.username}
  //                   helperText="User name is required"
  //                 />
  //               </div>
  //               <div className="flex flex-col mb-4 md:w-1/2">
  //                 <TextField
  //                   onChange={handleChange}
  //                   sx={{ padding: "5px" }}
  //                   label="First Name"
  //                   name="firstName"
  //                   placeholder="firstName"
  //                   // {...register("firstName", { required: true })}
  //                   // error={errors.firstName}
  //                   helperText="First name is required"
  //                 />
  //               </div>
  //               <div className="flex flex-col mb-4 md:w-1/2">
  //                 <TextField
  //                   onChange={handleChange}
  //                   sx={{ padding: "5px" }}
  //                   label="Last Name"
  //                   name="lastName"
  //                   placeholder="lastName"
  //                   // {...register("lastName", { required: true })}
  //                   // error={errors.lastName}
  //                   helperText="Last name is required"
  //                 />
  //               </div>
  //               <div className="flex flex-col mb-4 md:w-1/2">
  //                 <TextField
  //                   onChange={handleChange}
  //                   sx={{ padding: "5px" }}
  //                   label="Phone Number"
  //                   name="phoneNumber"
  //                   placeholder="phoneNumber"
  //                   // {...register("phoneNumber", { required: true })}
  //                   // error={errors.phoneNumber}
  //                   helperText="Phone number is required"
  //                 />
  //               </div>
  //               <div className="flex flex-col mb-4 md:w-1/2">
  //                 <TextField
  //                   onChange={handleChange}
  //                   sx={{ padding: "5px" }}
  //                   label="Email"
  //                   name="email"
  //                   placeholder="email"
  //                   // {...register("email", { required: true })}
  //                   // error={errors.email}
  //                   helperText="Email is required"
  //                 />
  //               </div>

  //               <div className="flex flex-col mb-4 md:w-full">
  //                 <TextField
  //                   onChange={handleChange}
  //                   sx={{ padding: "5px" }}
  //                   label="Address"
  //                   name="address"
  //                   placeholder="address"
  //                   // {...register("address", { required: true })}
  //                   // error={errors.address}
  //                   helperText="Address is required"
  //                 />
  //               </div>
  //               <div className="flex flex-col mb-4 md:w-1/2">
  //                 <TextField
  //                   onChange={handleChange}
  //                   sx={{ padding: "5px" }}
  //                   label="Gender"
  //                   name="gender"
  //                   placeholder="gender"
  //                   // {...register("gender", { required: true })}
  //                   // error={errors.username}
  //                   helperText="Gender is required"
  //                 />
  //               </div>

  //               <div className="flex flex-col  md:w-1/2">
  //                 <TextField
  //                   sx={{ padding: "5px" }}
  //                   label="Select Role"
  //                   select
  //                   name="role"
  //                   value={role}
  //                   placeholder="UserRole"
  //                   // {...register("role", { required: true })}
  //                   // error={errors.roleId}
  //                   onChange={handleChangeRole}
  //                   helperText="Role is required"
  //                 >
  //                   <MenuItem value="admin">Admin</MenuItem>
  //                   <MenuItem value="staff">Staff</MenuItem>
  //                   <MenuItem value="user">User</MenuItem>
  //                 </TextField>
  //               </div>
  //               <div className="flex flex-col md:w-1/2">
  //                 <div className="preview-img-container">
  //                   <input
  //                     id="preViewImg"
  //                     type="file"
  //                     hidden
  //                     name="image"
  //                     onChange={handleOnChangeImage}
  //                     // {...register("avatar")}
  //                   />
  //                   <label className="label-upload" htmlFor="preViewImg">
  //                     Tải ảnh
  //                     <i className="fas fa-upload" />
  //                     {avatar && (
  //                       <img src={avatar.preview} alt="" width="80%" />
  //                     )}
  //                   </label>
  //                 </div>
  //               </div>
  //               <div className="flex flex-col md:w-1/2">
  //                 <Button
  //                   type="submit"
  //                   variant="contained"
  //                   style={{
  //                     display: "block",
  //                     width: "150px",
  //                     marginTop: "20px",
  //                     marginLeft: "5px",
  //                   }}
  //                 >
  //                   Create
  //                 </Button>
  //               </div>
  //             </form>
  //           </div>

  //           {/*footer*/}
  //           <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
  //             <button
  //               className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
  //               type="button"
  //               onClick={() => setShowModal(false)}
  //             >
  //               Close
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  //   </>
  // );
};
export default ModalUser;
