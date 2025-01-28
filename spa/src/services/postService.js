import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const getAll = (offset, limit) => {
  const response = axios.get(`${apiUrl}/news?offset=${offset}&limit=${limit}`);
  return response;
};

const getLatest = () => {
  const response = axios.get(`${apiUrl}/news/latest`);
  return response;
};

const searchByTitle = (title) => {
  const response = axios.get(`${apiUrl}/news/search?title=${title}`);
  return response;
}

export default {
  getAll,
  getLatest,
  searchByTitle
};
