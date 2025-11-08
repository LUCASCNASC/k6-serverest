import http from 'k6/http'; 
import { sleep, check } from 'k6';
import { Counter, Gauge, Rate, Trend } from 'k6/metrics';

const PATH_URL = '/Login/post_login';
const BASE_URL = http.post(`${__ENV.BASE_URL}/${PATH_URL}`);