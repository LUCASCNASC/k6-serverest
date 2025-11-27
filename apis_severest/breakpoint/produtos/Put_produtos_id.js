import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        {
            duration: '2h',
            target: 10000
        }
    ]
};

export default function () {
    const res = http.put('https://serverest.dev/#/Produtos/put_produtos___id_');
    sleep(1);
}