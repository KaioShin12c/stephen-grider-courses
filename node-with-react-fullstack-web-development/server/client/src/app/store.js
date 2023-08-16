import { configureStore } from "@reduxjs/toolkit";

import { counterReducer } from "../redux/slices/counterSlice";
import { authReducer } from "../redux/slices/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
