import axios from "axios";

const API_URL =
  "http://localhost:3001/api";

export const api = axios.create({
  baseURL: API_URL,

  headers: {
    "Content-Type":
      "application/json"
  }
});

/* ===========================
   AUTH TOKEN
=========================== */

api.interceptors.request.use(
  config => {

    const token =
      localStorage.getItem(
        "snowchat_token"
      );

    if (
      token &&
      config.headers
    ) {

      config.headers.Authorization =
        `Bearer ${token}`;

    }

    return config;
  }
);

export default api;
