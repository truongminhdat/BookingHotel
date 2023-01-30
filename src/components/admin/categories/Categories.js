import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Categories = () => {
  let navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const handleChange = () => {
    navigate("/categories/addCategories");
  };
  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        let { data } = await axios.get(
          "http://localhost:8001/categories/getAllCategories"
        );
        setCategories(data.getAllCategories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUser();
  }, []);
  console.log("check data hello word", categories);
  return (
    <div className="container mt-5">
      <div className="columns">
        <div className="column is-centered">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={handleChange}
          >
            AddCategories
          </button>
          <table className="table is-striped is-bordered is-fullwidth mt-2">
            <thead>
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((categories) => (
                <tr>
                  <td>{categories.name}</td>
                  <td>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Edit
                    </button>
                    <button className="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Categories;
