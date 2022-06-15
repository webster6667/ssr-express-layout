import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const api = axios.create({
    withCredentials: true,
    baseURL: baseUrl
});
