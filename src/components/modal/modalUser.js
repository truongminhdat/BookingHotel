import { useState } from "react";
import { useForm } from "react-hook-form";
import * as React from "react";
import Button from "@mui/material/Button";
import userApi from "../../services/userService";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {
  Grid,
  Box,
  SFormControl,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Menu,
  FormHelperText,
} from "@mui/material";

const ModalUser = ({ setShowModal, title }) => {
  const [users, setUsers] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: "",
    gender: "",

    dayOfBirth: "",
    roleId: "",
  });
  const [avatar, setAvatar] = useState();
  const handleOnChangeImage = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    let response = await userApi.createPostUser({ ...data });
    if (response && response.status === 200) {
      toast.success("Create user success");
    } else {
      toast.error("Error create user");
    }
    console.log("check data", data);
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            <div className="relative p-4 flex-auto">
              <form
                className="mb-4 md:flex md:flex-wrap md:justify-between"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col mb-4 md:w-full">
                  <TextField
                    sx={{ padding: "10px" }}
                    label="username"
                    name="username"
                    placeholder="Username"
                    {...register("username", { required: true })}
                    error={errors.username}
                    helperText="username is required"
                  />
                </div>
                <div className="flex flex-col mb-4 md:w-1/2">
                  <TextField
                    sx={{ padding: "5px" }}
                    label="firstName"
                    name="firstName"
                    placeholder="firstName"
                    {...register("firstName", { required: true })}
                    error={errors.firstName}
                    helperText="firstName is required"
                  />
                </div>
                <div class="flex flex-col mb-4 md:w-1/2">
                  <TextField
                    sx={{ padding: "5px" }}
                    label="lastName"
                    name="lastName"
                    placeholder="lastName"
                    {...register("lastName", { required: true })}
                    error={errors.lastName}
                    helperText="lastName is required"
                  />
                </div>
                <div className="flex flex-col mb-4 md:w-1/2">
                  <TextField
                    sx={{ padding: "5px" }}
                    label="phoneNumber"
                    name="phoneNumber"
                    placeholder="phoneNumber"
                    {...register("phoneNumber", { required: true })}
                    error={errors.phoneNumber}
                    helperText="phoneNumber is required"
                  />
                </div>
                <div className="flex flex-col mb-4 md:w-1/2">
                  <TextField
                    sx={{ padding: "5px" }}
                    label="email"
                    name="email"
                    placeholder="email"
                    {...register("email", { required: true })}
                    error={errors.email}
                    helperText="email is required"
                  />
                </div>

                <div className="flex flex-col mb-4 md:w-full">
                  <TextField
                    sx={{ padding: "5px" }}
                    label="address"
                    name="address"
                    placeholder="address"
                    {...register("address", { required: true })}
                    error={errors.address}
                    helperText="address is required"
                  />
                </div>
                <div className="flex flex-col mb-4 md:w-1/2">
                  <TextField
                    sx={{ padding: "5px" }}
                    label="gender"
                    name="gender"
                    placeholder="gender"
                    {...register("gender", { required: true })}
                    error={errors.username}
                    helperText="username is required"
                  />
                </div>

                <div className="flex flex-col  md:w-1/2">
                  <TextField
                    sx={{ padding: "5px" }}
                    label="gender"
                    name="gender"
                    placeholder="Username"
                    {...register("gender", { required: true })}
                    error={errors.gender}
                    helperText="gender is required"
                  />
                </div>
                <div className="flex flex-col md:w-1/2">
                  <div className="preview-img-container">
                    <input
                      id="preViewImg"
                      type="file"
                      hidden
                      onChange={handleOnChangeImage}
                      // {...register("avatar")}
                    />
                    <label className="label-upload" htmlFor="preViewImg">
                      Tải ảnh
                      <i className="fas fa-upload" />
                      {avatar && (
                        <img src={avatar.preview} alt="" width="80%" />
                      )}
                    </label>
                  </div>
                </div>
                <div className="flex flex-col md:w-1/2">
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      display: "block",
                      width: "150px",
                      marginTop: "20px",
                      marginLeft: "5px",
                    }}
                  >
                    Create
                  </Button>
                </div>
              </form>
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
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
export default ModalUser;
