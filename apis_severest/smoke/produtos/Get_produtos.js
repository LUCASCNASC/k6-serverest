import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
    http.get('https://serverest.dev/#/Produtos/get_produtos');
    sleep(1);
}