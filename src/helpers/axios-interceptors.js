import axios from "axios";

export function axiosInterceptors() {
  axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (401 === error.response.status) {
      
    }
    return Promise.reject(error);
  });
}