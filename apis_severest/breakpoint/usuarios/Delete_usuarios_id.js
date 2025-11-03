import http from 'k6/http'; 
import { sleep, check } from 'k6';
import { Counter, Gauge, Rate, Trend } from 'k6/metrics';

const PATH_URL = '/Usuários/delete_usuarios___id_';
const response1 = http.delete(`${__ENV.BASE_URL}/${PATH_URL}/1`);