import axios from "axios";
import config from "../config";

const getAllCity = async () => {
  const response = await axios.get(`${config.url}/api/listing/city`);
  return response.data;
};
const addNewCity = async (body, token) => {
  const response = await axios.post(`${config.url}/api/listing/city`, body, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const cityApi = {
  getAllCity,
  addNewCity,
};
export default cityApi;
