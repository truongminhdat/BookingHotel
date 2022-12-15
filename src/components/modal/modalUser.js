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
    avatar: "",
    dayOfBirth: "",
    roleId: "",
  });
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

            <div className="relative p-6 flex-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  sx={{ padding: "10px" }}
                  label="username"
                  name="username"
                  placeholder="Username"
                  {...register("username", { required: true })}
                  error={errors.username}
                  helperText="username is required"
                />

                <TextField
                  sx={{ padding: "10px" }}
                  label="firstName"
                  name="firstName"
                  placeholder="firstName"
                  {...register("firstName", { required: true })}
                  error={errors.firstName}
                  helperText={errors.firstName && "firstName is required"}
                />
                <TextField
                  sx={{ padding: "10px" }}
                  label="lastName"
                  name="lastName"
                  placeholder="lastName"
                  {...register("phoneNumber", { required: true })}
                  error={errors.lastName}
                  helperText={errors.lastName && "lastName is required"}
                />
                <TextField
                  sx={{ padding: "10px" }}
                  label="ngày sinh"
                  name="dayOfBirth"
                  placeholder="ngày sinh"
                  {...register("dayOfBirth", { required: true })}
                  error={errors.dayOfBirth}
                  helperText={errors.dayOfBirth && "dayOfBirth is required"}
                />
                <TextField
                  sx={{ padding: "10px" }}
                  label="email"
                  name="email "
                  placeholder="email"
                  {...register("email", { required: true })}
                  error={errors.email}
                  helperText={errors.email && "email is required"}
                />
                <TextField
                  sx={{ padding: "10px" }}
                  label="address"
                  name="address"
                  placeholder="address"
                  {...register("address", { required: true })}
                  error={errors.email}
                  helperText={errors.email && "email is required"}
                />
                <TextField
                  sx={{ padding: "10px" }}
                  label="gender"
                  name="gender"
                  placeholder="gender"
                  {...register("gender")}
                  error={errors.gender}
                  helperText={errors.gender && "gender is required"}
                />

                <TextField
                  sx={{ padding: "10px" }}
                  label="lastName"
                  name="lastName"
                  placeholder="Username"
                  {...register("lastName")}
                />
                <TextField
                  sx={{ padding: "10px" }}
                  label="avatar"
                  name="avatar"
                  placeholder="avatar"
                  {...register("avatar")}
                />
                <FormControl>
                  <Select
                    style={{ marginTop: "10px" }}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setUsers({ ...users, roleId: e.target.value });
                    }}
                    value={users.role}
                    placeholder="choose"
                    label="role"
                    {...register("roleId")}
                  >
                    <MenuItem value="Choose">Choose role</MenuItem>
                    <MenuItem value={1}>admin</MenuItem>
                    <MenuItem value="2">user</MenuItem>
                  </Select>
                  <FormHelperText style={{ color: "red" }}>
                    required
                  </FormHelperText>
                </FormControl>

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
