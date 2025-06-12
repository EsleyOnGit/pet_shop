import axios from "axios";

const api = axios.create({
    baseURL: "http://meu_IP:3001",
    timeout: 10000
});

export default api;