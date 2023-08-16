import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  removeCar,
  addCar,
  changeSearchTerm,
} from "./slices/carsSlice.js";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
  devTools: true,
});

export { removeCar, addCar, changeSearchTerm, changeName, changeCost };

export default store;
