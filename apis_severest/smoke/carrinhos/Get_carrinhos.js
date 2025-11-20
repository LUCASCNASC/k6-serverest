import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
    http.get('https://serverest.dev/#/Carrinhos/get_carrinhos');
    sleep(1);
}