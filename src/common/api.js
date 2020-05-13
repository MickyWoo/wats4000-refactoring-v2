import axios from 'axios';

export const API = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/`
})
API.interceptors.request.use(function (config) {
   
    config.params.APPID = 'd571e47e313dd7b361aeb425ecdb6d4d';
    config.params.units = 'imperial';
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });