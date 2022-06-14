import axios from "axios";

const baseUrl = process.env.API_URL || "https://jsonplaceholder.typicode.com";

export const api = axios.create({
    withCredentials: true,
    baseURL: baseUrl
});
