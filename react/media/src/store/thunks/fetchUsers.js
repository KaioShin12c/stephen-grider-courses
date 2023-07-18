import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pause } from "../../utils/pause";

const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3005/users", {
        timeout: 2000,
      });
      // dev only
      await pause(2000);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { fetchUsers };
