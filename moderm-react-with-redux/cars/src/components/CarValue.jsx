import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector((state) => {
    return state.cars.data.reduce((acc, current) => {
      return acc + current.cost;
    }, 0);
  });

  return <div className="car-value">Total cost: ${totalCost}</div>;
};

export default CarValue;
