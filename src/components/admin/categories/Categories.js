import React from "react";
import { Link } from "react-router-dom";
const Categories = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <button className="bg-orange-500 ml-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link to="addCategories">AddCategories</Link>
        </button>
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <tbody>
              <table class="table-fixed text-center">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </tbody>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
