import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:3000'
});

function authToken(){
    return '1'
}
instance.interceptors.request.use(
  (config) => {
    const token = authToken()
    config.headers['Authorization'] = token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );
