import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost };
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleCostChange = (e) => {
    dispatch(changeCost(parseInt(e.target.value) || 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
          <div className="field">
            <button type="submit" className="button is-link">
              Add car
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
