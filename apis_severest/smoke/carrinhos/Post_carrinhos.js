import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
    const res = http.post('https://serverest.dev/#/Carrinhos/post_carrinhos');
    sleep(1);
}