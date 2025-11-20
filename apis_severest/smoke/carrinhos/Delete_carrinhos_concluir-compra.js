import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
    http.del('https://serverest.dev/#/Carrinhos/delete_carrinhos_concluir_compra');
    sleep(1);
}