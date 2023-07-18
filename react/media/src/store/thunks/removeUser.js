import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const removeUser = createAsyncThunk(
  "users/remove",
  async (user, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3005/users/${user.id}`);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
