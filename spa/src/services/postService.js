import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const getAll = (offset) => {
  const response = axios.get(`${apiUrl}/news?offset=${offset}`);
  return response;
};

export default {
  getAll,
};
