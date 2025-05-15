import axios from "axios";

const http = axios.create({
  baseURL: "https://techsolve-api.hafizh.web.id/",
});

export default http;
