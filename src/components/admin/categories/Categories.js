import React, { useState, useEffect } from "react";
import { useNavigate, Route, Routes, Link, Navigate } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";

const Categories = () => {
  let navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(0);
  const [limit, setLimit] = useState(2);
  const [rows, setRows] = useState(0);
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState("");
  const [msg, setMsg] = useState("");

  const handleChange = () => {
    navigate("/categories/addCategories");
  };

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        let { data } = await axios.get(
          `http://localhost:8001/categories/getAllCategories?page=${page}&limit${limit}&search=${keyword}`
        );
        setCategories(data.getAllCategories);
        setLimit(data.limit);
        setPages(data.totalPage);
        setRows(data.totalRows);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllUser();
  }, [page, keyword]);
  console.log("check data", categories);

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  const searchData = (e) => {
    e.preventDefault();
    setPage(0);
    setMsg("");
    setKeyword(query);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8001/categories/deleteCategory/?id=${id}`
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // const handleEdit = () => {
  //   navigate(`/categories/EditCategories/${categories.id}`)
  // }

  return (
    <div className="container mt-5">
      <form onSubmit={searchData}>
        <div className="field has-addons my-5">
          <div className="control is-expanded">
            <input
              type="text"
              className="input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find something here..."
            />
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="columns">
        <div className="column is-centered">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={handleChange}
          >
            Add Categories
          </button>
          <table className="table is-striped is-bordered is-fullwidth mt-2">
            <thead>
              <tr>
                <th className="w-4/5">Name</th>
                <th className="flex justify-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((categories) => (
                <tr key={categories.id}>
                  <td>{categories.name}</td>
                  <td className="flex justify-center">
                    <button
                    // onClick={() => handleEdit(categories.id)}
                    >
                      <Link
                        className="px-4 py-2 text-white font-bold border border-blue-600 bg-blue-500 rounded"
                        to={`/categories/EditCategories/?id=${categories.id}`}
                      >
                        Edit
                      </Link>{" "}
                    </button>

                    <button
                      onClick={() => handleDelete(categories.id)}
                      className="ml-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-900 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            Total rows:{rows} Pages: {rows ? page + 1 : 0} of {pages}
          </p>

          <nav
            className="pagination is-centered"
            key={rows}
            role="navigation"
            aria-label="pagination"
          >
            <ReactPaginate
              previousLabel={"< Prev"}
              nextLabel={"Next >"}
              pageCount={Math.min(10, pages)}
              onPageChange={handlePageClick}
              containerClassName={"pagination-list"}
              pageLinkClassName={"pagination-link"}
              previousLinkClassName={"pagination-previous"}
              nextLinkClassName={"pagination-next"}
              activeLinkClassName={"pagination-link is-current"}
              disabledLinkClassName={"pagination-link is-disabled"}
            />
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Categories;
