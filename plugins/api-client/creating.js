'use strict';
import baseAxios from 'axios';

const BASE_URL = 'https://www.metaweather.com/api';
const TIMEOUT = 10000;


const axios = baseAxios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axios;
