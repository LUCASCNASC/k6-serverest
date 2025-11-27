import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
    const res = http.get('https://serverest.dev/#/Produtos/get_produtos___id_');
    sleep(1);
}