import http from 'k6/http'; 
import { sleep, check } from 'k6';
import { Counter, Gauge, Rate, Trend } from 'k6/metrics';

const PATH_URL = '/Carrinhos/delete_carrinhos_concluir_compra';
const BASE_URL = http.delete(`${__ENV.BASE_URL}/${PATH_URL}`);

export const options = {
  vus: 1,
  duration: '30s',
  thresholds: {
    checks: ['rate>0.99'],
  }
};

export default function () {

  const res = http.delete(BASE_URL);

    check(res, {
      'is status 200': (r) => r.status === 200
    });
};