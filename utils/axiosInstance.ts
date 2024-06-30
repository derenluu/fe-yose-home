import axios from 'axios';

let AxiosInstance = axios.create();

AxiosInstance.defaults.timeout = 1000 * 60 * 5; // 5 min
AxiosInstance.defaults.withCredentials = true; // use httpOnly cookie 

let refreshTokenPromise: Promise<any> | null = null;

AxiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default AxiosInstance;
