import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const surveysSlice = createSlice({
  name: "surveys",
  initialState,
  reducers: {},
});

export default surveysSlice;
export const surveysReducer = surveysSlice.reducer;
