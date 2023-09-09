import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/', // Replace with your API base URL
  timeout: 10000,
});

// Add a request interceptor to attach the authentication token to each request
instance.interceptors.request.use(
  (config:any) => {
    const token = localStorage.getItem('token'); // Replace with your token retrieval logic
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;



