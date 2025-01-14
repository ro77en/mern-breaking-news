import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const getAll = () => {
  const response = axios.get(`${apiUrl}/news`);
  return response;
};

export default {
  getAll,
};
