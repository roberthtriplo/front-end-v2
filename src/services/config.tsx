import axios from 'axios';

const BASE_URL = "http://localhost:3000/api/v1/";
//const BASE_URL = "https://back.triplo.com.co/api/v1/";
const API = axios.create({
    baseURL: BASE_URL,
});

export default API;