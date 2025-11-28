import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
    const res = http.del('https://serverest.dev/#/Carrinhos/delete_carrinhos_cancelar_compra');
    sleep(1);
    check(res, {
        'status is 200': (r) => r.status === 200
    });
}