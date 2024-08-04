import axios  from "axios";

export const myAxios = axios.create({
  baseURL: 'http://localhost:8080/', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});
