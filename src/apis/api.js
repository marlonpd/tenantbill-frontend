import axios from "axios";
import config from "./config";

const Api = axios.create({
    baseURL: config.API_URL
});

export default Api;