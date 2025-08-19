import axios from "axios";
import { API_PATHS, BASE_URL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASE_URL,  //setting base URL
  timeout: 10000,  //setting 10-second timeout for requests
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Request Interceptor to make sure of authentication //later added
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    // Skip Authorization header for login endpoint
    if (accessToken && config.url !== API_PATHS.AUTH.LOGIN) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor to deal with data recieved
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors globally
    if (error.response) {
      if (error.response.status === 401) {
        // Redirect to login page
        window.location.href = "/login";
      } else if (error.response.status === 500) {
        console.error("Server error. Please try again later.");
      } else if (error.code === "ECONNABORTED") {
        console.error("Request timeout. Please try again.");
      }
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
