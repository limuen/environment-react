import axios from 'axios';
// create an axios instance
const service = axios.create({
  // baseURL: process.env.REACT_APP_BASE_API,
  timeout: 5000,
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (localStorage.getItem('token')) {
      config.headers['Authorization'] = 'Bearer ';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== '0') {
      alert('请求失败');
      return Promise.reject(res.msg || 'error');
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
