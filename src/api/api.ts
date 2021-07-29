import axios from "axios";
const apiUrl = '';
const get = async ()=> axios.get(apiUrl)

const api = { get };

export default api;