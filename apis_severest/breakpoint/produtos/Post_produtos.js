import http from 'k6/http'; 
import { sleep, check } from 'k6';
import { Counter, Gauge, Rate, Trend } from 'k6/metrics';

const PATH_URL = '/Produtos/post_produtos';
const response1 = http.post(`${__ENV.BASE_URL}/${PATH_URL}`);