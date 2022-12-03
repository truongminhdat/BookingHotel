import React from "react";

// $("input[data-type='currency']").on({
//   keyup: function () {
//     formatCurrency($(this));
//   },
//   blur: function () {
//     formatCurrency($(this), "blur");
//   },
// });

// function formatNumber(n) {
//   return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
// function formatCurrency(input, blur) {
//   var input_val = input.val();
//   if (input_val === "") {
//     return;
//   }
//   var original_len = input_val.length;
//   var caret_pos = input.prop("selectionStart");
//   if (input_val.indexOf(".") >= 0) {
//     var decimal_pos = input_val.indexOf(".");
//     var left_side = input_val.substring(0, decimal_pos);
//     var right_side = input_val.substring(decimal_pos);
//     left_side = formatNumber(left_side);
//     right_side = formatNumber(right_side);
//     if (blur === "blur") {
//       right_side += "00";
//     }
//     right_side = right_side.substring(0, 2);
//     input_val = "$" + left_side + "." + right_side;
//   } else {
//     input_val = formatNumber(input_val);
//     input_val = "$" + input_val;
//     if (blur === "blur") {
//       input_val += ".00";
//     }
//   }
//   input.val(input_val);
//   var updated_len = input_val.length;
//   caret_pos = updated_len - original_len + caret_pos;
//   input[0].setSelectionRange(caret_pos, caret_pos);
// }

const Products = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <p className="flex items-center mb-6 text-3xl font-extrabold text-gray-900 dark:text-white">
          <span className="text-gray-100">Add Room</span>
        </p>
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="lg:p-7 space-y-4 md:space-y-5 sm:p-4">
            <form className=" space-y-4 md:space-y-2" action="#">
              <div>
                <label
                  for="roomName"
                  className="block lg:mb-3 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Room Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="roomName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white "
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="roomTitle"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                />
              </div>
              <div>
                <label
                  for="status"
                  className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Room Status
                </label>
                <textarea
                  type="text"
                  name="status"
                  id="roomStatus"
                  className="room-status bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                />
              </div>
              <div>
                <label
                  for="convenient"
                  className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Room Convenient
                </label>
                <textarea
                  type="text"
                  name="convenient"
                  id="roomConvenient"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
                />
              </div>
              <div>
                <label
                  for="roomType"
                  className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Room Type
                </label>
                <input
                  type="text"
                  name="title"
                  id="roomType"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                />
              </div>
              <div>
                <label
                  for="currency-field"
                  className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="currency-field"
                  id="price"
                  pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                  data-type="currency"
                  placeholder="$1,000,000.00"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                />
              </div>
              <div>
                <label
                  for="roomImg"
                  className="block mb-2 md:mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  image
                </label>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
                  name="image"
                  id="roomImg"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mb-3 lg:p-2.5 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                />
              </div>
              <button
                type="submit"
                className="w-full text-black bg-slate-400 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:hover:text-white dark:focus:ring-slate-100 dark:focus:text-white"
              >
                Create Room
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Products;
