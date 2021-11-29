import axios from "axios";

const API = axios.create({
    baseURL:"https://api.data.gov.sg/v1/transport/traffic-images",
});

export default API;