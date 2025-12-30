import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

// Register
export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/register`, userData);
  if (res.data.token) {
    localStorage.setItem("userInfo", JSON.stringify(res.data));
  }
  return res.data;
};

// Login
export const loginUser = async (userData) => {
  const res = await axios.post(`${API_URL}/login`, userData);
  if (res.data.token) {
    localStorage.setItem("userInfo", JSON.stringify(res.data));
  }
  return res.data;
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("userInfo");
};
