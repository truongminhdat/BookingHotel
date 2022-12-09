const ModalUser = ({ setShowModal }) => {
  return (
    <>
      <div className="backdrop-brightness-75 backdrop-blur-[2px] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-4xl bg-none">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-300 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-2 border-b border-solid  rounded-t">
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
            <div class="w-full max-w-xs">
              <form class="bg-slate-300 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-md font-bold mb-2"
                    for="username"
                  >
                    User Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="User Name"
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-md font-bold mb-2"
                    for="FirstName"
                  >
                    First Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="lastName"
                    placeholder="First Name"
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-md font-bold mb-2"
                    for="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="lastName"
                    placeholder="Last Name"
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-md font-bold mb-2"
                    for="address"
                  >
                    Address
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="lastName"
                    placeholder="Address"
                  />
                </div>
                <div class="mb-4">
                  <label
                    class="block text-gray-700 text-md font-bold mb-2"
                    for="firstName"
                  >
                    Phone Number
                  </label>
                  <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="lastName"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-4 flex flex-col justify-center">
                  <label
                    className="text-gray-700 text-md font-bold mb-2"
                    for="role"
                  >
                    Role
                  </label>
                  <select
                    className=" shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                    id="role"
                    name="role"
                  >
                    <option value="" disabled selected hidden>
                      Choose role...
                    </option>
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                    <option value="user">User</option>
                  </select>
                </div>
                <div class="flex items-center mb-2">
                  <input
                    id="male"
                    type="radio"
                    name="gender"
                    class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                    aria-labelledby="male"
                    aria-describedby="male"
                  />
                  <label
                    for="otherGender"
                    class="text-md font-medium text-gray-900 ml-2 block"
                  >
                    Male
                  </label>
                </div>

                <div class="flex items-center mb-2">
                  <input
                    id="female"
                    type="radio"
                    name="gender"
                    class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                    aria-labelledby="female"
                    aria-describedby="female"
                  />
                  <label
                    for="female"
                    class="text-md font-medium text-gray-900 ml-2 block"
                  >
                    FeMale
                  </label>
                </div>

                <div class="flex items-center mb-4">
                  <input
                    id="otherGender"
                    type="radio"
                    name="gender"
                    class="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                    aria-labelledby="otherGender"
                    aria-describedby="otherGender"
                  />
                  <label
                    for="otherGender"
                    class="text-md font-medium text-gray-900 ml-2 block"
                  >
                    Other
                  </label>
                </div>
              </form>
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end p-1 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
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
export default ModalUser;
