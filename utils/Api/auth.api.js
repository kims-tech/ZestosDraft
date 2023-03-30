import axios from "axios";
import config from "../config";

const loginHandlerApi = async (body) => {
  const response = await axios.post(`${config.url}/api/auth/login`, body);
  return response.data;
};

const verifyOtpForLogin = async (body) => {
  const response = await axios.post(
    `${config.url}/api/auth/verifyOtpForlogin`,
    body
  );
  return response.data;
};
const getUserDetail = async (token) => {
  const response = await axios.get(`${config.url}/api/auth/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const authApi = {
  loginHandlerApi,
  verifyOtpForLogin,
  getUserDetail,
};
export default authApi;
