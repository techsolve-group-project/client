import axios from 'axios';

const http = axios.create({
  baseURL: 'https://tech-solve.superzeco.site/',
});

export default http;
