import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
    http.del('https://serverest.dev/#/Produtos/delete_produtos___id_');
    sleep(1);
}