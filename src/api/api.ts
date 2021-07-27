import axios from "axios";


const apiUrl = '';

export const get = ()=>{
    return axios.get(apiUrl);
};