import http from 'k6/http'; 
import { sleep, check } from 'k6';
import { Counter, Gauge, Rate, Trend } from 'k6/metrics';

const PATH_URL = '/Produtos/put_produtos___id_';
const BASE_URL = http.put(`${__ENV.BASE_URL}/${PATH_URL}/1`);


export const options = {
  vus: 1,
  duration: '30s',
  thresholds: {
    checks: ['rate>0.99'],
  }
};

export default function () {

  const res = http.put(BASE_URL);

    check(res, {
      'is status 200': (r) => r.status === 200
    });
};