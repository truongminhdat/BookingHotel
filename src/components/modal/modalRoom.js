import React from "react";

const ModalRoom = ({ setShowModal }) => {
  return (
    <p>Hello work</p>
    // <>
    //   <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
    //     <div className="relative w-auto my-6 mx-auto max-w-3xl">
    //       {/*content*/}
    //       <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
    //         {/*header*/}
    //         <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
    //           <h3 className="text-3xl font-semibold">Add User</h3>
    //           <button
    //             className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
    //             onClick={() => setShowModal(false)}
    //           >
    //             <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
    //               ×
    //             </span>
    //           </button>
    //         </div>
    //         {/*body*/}
    //         <div className="relative p-6 flex-auto">
    //           <section className="bg-gray-50 dark:bg-gray-900">
    //             <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //               <p className="flex items-center mb-6 text-3xl font-extrabold text-gray-900 dark:text-white">
    //                 <span className="text-black-200">Add Room</span>
    //               </p>
    //               <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //                 <div className="lg:p-7 space-y-4 md:space-y-5 sm:p-4">
    //                   <form className=" space-y-4 md:space-y-2" action="#">
    //                     <div>
    //                       <label
    //                         htmlFor="roomName"
    //                         className="block lg:mb-3 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
    //                       >
    //                         Room Name
    //                       </label>
    //                       <input
    //                         type="text"
    //                         name="name"
    //                         value={data.name}
    //                         onChange={handleOnChangeDesc}
    //                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white "
    //                       />
    //                     </div>
    //                     <div>
    //                       <label
    //                         htmlFor="title"
    //                         className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
    //                       >
    //                         Title
    //                       </label>
    //                       <input
    //                         type="text"
    //                         name="title"
    //                         onChange={handleOnChangeDesc}
    //                         value={data.title}
    //                         id="roomTitle"
    //                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
    //                       />
    //                     </div>

    //                     <div>
    //                       <label
    //                         htmlFor="convenient"
    //                         className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
    //                       >
    //                         Room Convenient
    //                       </label>
    //                       <input
    //                         type="text"
    //                         name="convenient"
    //                         value={data.convenient}
    //                         onChange={handleOnChangeDesc}
    //                         className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
    //                       />
    //                     </div>
    //                     <div>
    //                       <label
    //                         htmlFor="currency-field"
    //                         className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
    //                       >
    //                         RoomTypeApi
    //                       </label>
    //                       <input
    //                         type="text"
    //                         name="roomTypeId"
    //                         value={data.roomTypeId}
    //                         onChange={handleOnChangeDesc}
    //                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
    //                       />
    //                     </div>
    //                     <div>
    //                       <label
    //                         htmlFor="currency-field"
    //                         className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
    //                       >
    //                         Price
    //                       </label>
    //                       <input
    //                         type="text"
    //                         name="price"
    //                         value={data.price}
    //                         onChange={handleOnChangeDesc}
    //                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
    //                       />
    //                     </div>
    //                     <div>
    //                       <label
    //                         htmlFor="roomImg"
    //                         className="block mb-2 md:mb-1 text-sm font-medium text-defaultValuegray-900 dark:text-white"
    //                       >
    //                         Image
    //                       </label>
    //                       <input
    //                         type="text"
    //                         name="image"
    //                         value={data.image}
    //                         onChange={handleOnChangeDesc}
    //                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mb-3 lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
    //                       />
    //                       {/* {image && (
    //                         <img
    //                           src={image.preview}
    //                           alt=""
    //                           width="80%"
    //                           height="50%"
    //                         />
    //                       )} */}
    //                     </div>
    //                     <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
    //                       <button
    //                         className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    //                         type="button"
    //                         onClick={() => setShowModal(false)}
    //                       >
    //                         Close
    //                       </button>
    //                       <button
    //                         className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    //                         type="button"
    //                         onClick={() => handleSubmit()}
    //                       >
    //                         Save Changes
    //                       </button>
    //                     </div>
    //                   </form>
    //                 </div>
    //               </div>
    //             </div>
    //           </section>
    //         </div>
    //         {/*footer*/}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    // </>
  );
};
export default ModalRoom;
