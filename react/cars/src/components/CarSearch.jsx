import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);

  const handleSearchTermChange = (e) => {
    dispatch(changeSearchTerm(e.target.value));
  };

  return (
    <div className="list-header">
      <h3>My cars</h3>
      <div className="search field is-horizontal">
        <input
          type="text"
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
};

export default CarSearch;
