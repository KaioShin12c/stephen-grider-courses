import axios from "axios";
import axiosClient from "./axiosClient";

const authApi = {
  getCurrentUser() {
    return axios.get("/api/current_user");
  },

  logout() {
    return axios.get("/api/logout");
  },
};

export default authApi;
