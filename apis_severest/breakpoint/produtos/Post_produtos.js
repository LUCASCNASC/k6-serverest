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
    const res = http.post('https://serverest.dev/#/Produtos/post_produtos');
    sleep(1);
    check(res, {
        'status is 200': (r) => r.status === 200
    });
}