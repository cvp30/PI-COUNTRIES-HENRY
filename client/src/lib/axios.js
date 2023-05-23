import axios from 'axios';
axios.defaults.baseURL = "https://apicountries.up.railway.app/";
// axios.defaults.baseURL = "http://localhost:3001/";

export const getAxios = async (url) => {
  return await axios.get(url).then(res => res.data);
}

export const postAxios = async (url, postRequest) => {
  return await axios.post(url, postRequest);
}