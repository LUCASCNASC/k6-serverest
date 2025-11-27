import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        {
            duration: '5m',
            target: 1000
        },
        {
            duration: '24h',
            target: 1000
        },
        {
            duration: '5m',
            target: 0
        }
    ]
};

export default function () {
    const res = http.del('https://serverest.dev/#/Carrinhos/delete_carrinhos_cancelar_compra');
    sleep(1);
}