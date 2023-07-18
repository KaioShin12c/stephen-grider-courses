import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../apis/authApi";

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {
    try {
      const response = await authApi.getCurrentUser();
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const getLogout = createAsyncThunk("auth/getLogout", () => {
  async () => {
    try {
      await authApi.logout();
      return { success: true };
    } catch (error) {
      console.log(error);
    }
  };
});

const initialState = {
  isLoading: false,
  data: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getLogout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLogout.fulfilled, (state) => {
        console.log("set logout");
        state.isLoading = false;
        state.data = null;
      })
      .addCase(getLogout.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default authSlice;
export const authReducer = authSlice.reducer;
export const {} = authSlice.actions;
